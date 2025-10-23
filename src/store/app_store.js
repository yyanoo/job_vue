import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {

    state: () => ({
        isLoading: true,
        check: false,

        //res 資料到後端 來拿頁面資料
        page: {
            Page: 1,
            Page_size: 4,
        },
        max_pages: 0,
        req_page: {},
    }),

    actions: {
        cleanEmptyToNull(obj) {
            return Object.fromEntries(
                Object.entries(obj).map(([key, value]) => [key, value === '' ? null : value])
            )
        },

        Loading_end(timer) {
            setTimeout(() => {
                this.isLoading = false
            }, timer);
        },

        Check_haveData(o) {
            if (Array.isArray(o) && o.length > 0) {
                this.check = true
            } else {
                this.check = false
            }
        },
        Check_Max_page() {
            const Max = this.req_page
            const size = this.page.Page_size
            let total = Math.ceil(Max / size)
            this.max_pages = total
        }
    }
})