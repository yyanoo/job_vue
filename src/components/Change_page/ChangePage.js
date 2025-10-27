import { ref, watch, computed } from 'vue'
import { useAppStore } from '../../store/app_store'

export const usePagination = () => {
    //一般 頁面切換
    const use_app = useAppStore()

    const num = ref(1)

    watch(num, (newVal) => {
        if (newVal < 1) {
            num.value = 1
        }
        if (newVal > use_app.max_pages) {
            if (num.value !== use_app.max_pages) num.value = use_app.max_pages
        }
        use_app.page.Page = num.value
    })

    const min_num = () => {
        num.value = Math.max(num.value - 1, 1)
        use_app.page.Page = num.value
    }

    const min_num_5 = () => {
        num.value = Math.max(num.value - 5, 1)
        use_app.page.Page = num.value
    }

    const add_num = () => {
        num.value += 1
        use_app.page.Page = num.value
    }

    const add_num_5 = () => {
        num.value += 5
        use_app.page.Page = num.value
    }

    const pageRange = computed(() => {

        const currentPage = ref(num.value)
        console.log(num.value)
        const maxVisible = 10

        const half = Math.floor(maxVisible / 2)
        let start = currentPage.value - half
        let end = currentPage.value + half - 1 //maxVisible 爲雙數時 加上 -1

        // 避免超出邊界
        if (start < 1) {
            start = 1
            end = maxVisible
        }
        if (end > use_app.max_pages) {
            end = use_app.max_pages
            start = use_app.max_pages - maxVisible + 1
        }
        if (start < 1) start = 1
        num.value = currentPage.value
        
        return {
            current: num.value,
            pages: Array.from({ length: end - start + 1 }, (_, i) => start + i)
        }
    })

    return {
        num,
        min_num,
        min_num_5,
        add_num,
        add_num_5,
        pageRange
    }
}