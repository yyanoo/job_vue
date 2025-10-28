import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAppStore } from '../../store/app_store'

export const usePageStore = defineStore('page', () => {

    const use_app = useAppStore()
    const num = ref(1)

    // 計算屬性：當前頁面範圍
    const pageRange = computed(() => {
        const currentPage = num.value
        const maxVisible = 10
        const half = Math.floor(maxVisible / 2)

        let start = currentPage - half
        let end = currentPage + half - 1 // maxVisible 為雙數時加上 -1

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

        return {
            current: num.value,
            pages: Array.from({ length: end - start + 1 }, (_, i) => start + i)
        }
    })

    // 設置頁碼（帶邊界檢查）
    const setPage = (page) => {
        if (page < 1) {
            num.value = 1
        } else if (page > use_app.max_pages) {
            num.value = use_app.max_pages
        } else {
            num.value = page
        }
        use_app.page.Page = num.value
    }

    // 減少 1 頁
    const min_num = () => {
        setPage(num.value - 1)
    }

    // 減少 5 頁
    const min_num_5 = () => {
        setPage(num.value - 5)
    }

    // 增加 1 頁
    const add_num = () => {
        setPage(num.value + 1)
    }

    // 增加 5 頁
    const add_num_5 = () => {
        setPage(num.value + 5)
    }

    const click = (page) => {
        setPage(page)
    }

    // 重置頁碼
    const reset = () => {
        setPage(1)
    }

    return {
        // State
        num,

        // Getters
        pageRange,

        // Actions
        setPage,
        min_num,
        min_num_5,
        add_num,
        add_num_5,
        click,
        reset
    }
})