import { defineStore } from 'pinia'
import { useAppStore } from './app_store'
import { getProduct, createProduct, updateProduct, delProduct } from '../service/product_api'

const app_store = useAppStore()

export const useProductStore = defineStore('order', {

    state: () => ({
        data: {},
        data_res: {
            ProductID: '',
            Ean: '',
            Name: '',
            ListPrice: '',
            Cost: '',
        },
    }),

    actions: {
        async getProduct_api() {
            try {
                app_store.isLoading = true
                const data = await getProduct()
                this.data = data.data
            } catch (e) {
                console.error('Error fetching orders:', e)
            }
        },

        async createProduct_api() {
            if (this.data_res.OrderID == '' || this.data_res.ProductID == '' || this.data_res.Qty == '' || this.data_res.Qty == '') {
                return alert("請給完整資料")
            }
            try {
                const cleanData = app_store.cleanEmptyToNull(this.data_res)
                const req = await createProduct(cleanData)
                alert(req.message)
            } catch (e) {
                console.error('Error fetching orders:', e)
            }
        },

        async updateProduct_api() {
            if (this.data_res.OrderID == '' || this.data_res.ProductID == '') {
                return alert("請給完整資料")
            }
            try {
                const cleanData = app_store.cleanEmptyToNull(this.data_res)
                const req = await updateProduct(cleanData)
                alert(req.message)
            } catch (e) {
                console.error('Error fetching orders:', e)
            }
        },

        async delProduct_api() {
            if (this.data_res.OrderID == '' || this.data_res.ProductID == '') {
                return alert("請給完整資料")
            }
            try {
                const cleanData = app_store.cleanEmptyToNull(this.data_res)
                const req = await delProduct(cleanData)
                alert(req.message)
            } catch (e) {
                console.error('Error fetching orders:', e)
            }
        },
    }
})