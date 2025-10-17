import { defineStore } from 'pinia'
import { getOrder, createOrder, updateOrder, delOrder } from '../service/orders_api'

export const useOrderStore = defineStore('order', {

    state: () => ({
        data: {},
        data_res: {
            OrderID: '',
            ProductID: '',
            Qty: '',
            Discount: ''
        },
        IsLaoding: false
    }),

    actions: {
        cleanEmptyToNull(obj) {
            return Object.fromEntries(
                Object.entries(obj).map(([key, value]) => [key, value === '' ? null : value])
            )
        },

        async getOrder_api() {
            try {
                this.IsLaoding = true
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
                const cleanData = this.cleanEmptyToNull(this.data_res)
                const req = await createOrder(cleanData)
                alert(req.message)
            } catch (e) {
                console.error('Error fetching orders:', e)
            }
        },

        async updateOrder_api() {
            if (this.data_res.OrderID == '' || this.data_res.ProductID == '') {
                return alert("請給完整資料")
            }
            try {
                const cleanData = this.cleanEmptyToNull(this.data_res)
                const req = await updateOrder(cleanData)
                alert(req.message)
            } catch (e) {
                console.error('Error fetching orders:', e)
            }
        },

        async delOrder_api() {
            if (this.data_res.OrderID == '' || this.data_res.ProductID == '') {
                return alert("請給完整資料")
            }
            try {
                const cleanData = this.cleanEmptyToNull(this.data_res)
                const req = await delOrder(cleanData)
                alert(req.message)
            } catch (e) {
                console.error('Error fetching orders:', e)
            }
        },
    }
})