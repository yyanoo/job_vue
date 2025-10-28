import { defineStore } from 'pinia'
import { useAppStore } from './app_store'
import { getProduct, findProduct } from '../service/product_api'

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
                const res = await getProduct()
                this.data = res.data
            } catch (e) {
                console.error('Error fetching orders:', e)
            }
        },

        async find_Product() {
            const res = await findProduct(this.data_res)
            //檢查req productid 是不是 null 
            this.check = res.data
            if (!this.check) {
                return
            }
            this.data = [...this.data, this.check]
            console.log(this.data)
        }
    }
})