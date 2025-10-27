import { ref, watch } from 'vue'
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

    return {
        num,
        min_num,
        min_num_5,
        add_num,
        add_num_5,
    }
}