import { defineStore } from 'pinia'
import { useAppStore } from './app_store'
import { getOrder, createOrder, updateOrder, delOrder } from '../service/orders_api'

const app_store = useAppStore()

export const useOrderStore = defineStore('order', {

    state: () => ({
        data: {},
        data_res: {
            OrderID: '',
            ProductID: '',
            Qty: '',
            Discount: ''
        },
    }),

    actions: {
        async getOrder_api() {
            try {
                app_store.isLoading = true
                const data = await getOrder()
                this.data = data.data
            } catch (e) {
                console.error('Error fetching orders:', e)
            }
        },

        async createOrder_api() {
            if (this.data_res.OrderID == '' || this.data_res.ProductID == '' || this.data_res.Qty == '' || this.data_res.Qty == '') {
                return alert("請給完整資料")
            }
            try {
                const cleanData = app_store.cleanEmptyToNull(this.data_res)
                const req = await createOrder(cleanData)
                alert(req.message)
            } catch (e) {
                console.error('Error fetching orders:', e)
            } finally {
                await this.getOrder_api()
            }
        },

        async updateOrder_api() {
            if (this.data_res.OrderID == '' || this.data_res.ProductID == '') {
                return alert("請給完整資料")
            }
            try {
                const cleanData = app_store.cleanEmptyToNull(this.data_res)
                const req = await updateOrder(cleanData)
                alert(req.message)
            } catch (e) {
                console.error('Error fetching orders:', e)
            } finally {
                await this.getOrder_api()
            }
        },

        async delOrder_api() {
            if (this.data_res.OrderID == '' || this.data_res.ProductID == '') {
                return alert("請給完整資料")
            }
            try {
                const cleanData = app_store.cleanEmptyToNull(this.data_res)
                const req = await delOrder(cleanData)
                alert(req.message)
            } catch (e) {
                console.error('Error fetching orders:', e)
            } finally {
                await this.getOrder_api()
            }
        },
    }
})