import { ref, computed, watch } from 'vue'
import { useAppStore } from '../../store/app_store'


export const usePagination = () => {

    const num = ref(1)
    const use_app = useAppStore()

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
        const maxVisible = 5
        const currentPage = num.value
        const totalPages = use_app.pages.max || 1

        const half = Math.floor(maxVisible / 2)
        let start = currentPage - half
        let end = currentPage + half

        if (start < 1) {
            start = 1
            end = maxVisible
        }
        if (end > totalPages) {
            end = totalPages
            start = totalPages - maxVisible + 1
        }
        if (start < 1) start = 1

        use_app.pages.start = start
        use_app.pages.end = end

        return { start, end, current: currentPage }
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