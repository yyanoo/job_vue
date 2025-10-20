import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {

    state: () => ({
        isLoading: true,
        check: false
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