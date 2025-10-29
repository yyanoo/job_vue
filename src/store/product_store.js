import { defineStore } from 'pinia'
import { useAppStore } from './app_store'
import { getProduct } from '../service/product_api'

const app_store = useAppStore()

export const useProductStore = defineStore('product', {

    state: () => ({
        data: [],
        data_res: {
            ProductID: '',
            Ean: '',
            Name: '',
            ListPrice: '',
            Cost: '',
        },
        check: {},
    }),

    actions: {
        async getProduct_api() {
            try {
                app_store.isLoading = true
                const req = await getProduct()
                this.data = req.data
            } catch (e) {
                console.error('Error fetching orders:', e)
            }
        },
    }
})