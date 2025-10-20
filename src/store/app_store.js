import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {

    state: () => ({
        isLoading: false
    }),

    actions: {
        cleanEmptyToNull(obj) {
            return Object.fromEntries(
                Object.entries(obj).map(([key, value]) => [key, value === '' ? null : value])
            )
        },

        Loading_end() {
            setTimeout(() => {
                this.isLoading = false
            }, 1000)
        }
    }
})