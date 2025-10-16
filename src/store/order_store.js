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
        }
    }),

    actions: {
        cleanEmptyToNull(obj) {
            return Object.fromEntries(
                Object.entries(obj).map(([key, value]) => [key, value === '' ? null : value])
            )
        },
        async getOrder_api() {
            const req = await getOrder()
            this.data = await req.data
        },
        async createOrder_api() {
            const cleanData = this.cleanEmptyToNull(this.data_res)
            const res = await createOrder(cleanData)
            const req = await res
            alert(req.message)
        },
        async updateOrder_api() {
            const cleanData = this.cleanEmptyToNull(this.data_res)
            const res = await updateOrder(cleanData)
            const req = await res
            alert(req.message)
        },
        async delOrder_api() {
            const cleanData = this.cleanEmptyToNull(this.data_res)
            const res = await delOrder(cleanData)
            const req = await res
            alert(req.message)
        },
    }
})