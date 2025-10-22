import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {

    state: () => ({
        isLoading: true,
        check: false,

        //res 資料到後端 來拿頁面資料
        page: {
            Page: 1,
            Page_size: 4,
        }
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

    }
})