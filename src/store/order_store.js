import { defineStore } from 'pinia'
import { useAppStore } from './app_store'
import { createOrder, updateOrder, delOrder, getOrder_page } from '../service/orders_api'

const app_store = useAppStore()

export const useOrderStore = defineStore('order', {

    state: () => ({
        //存取req 的後端資料
        data: [],
        //res 給後端的資料
        data_res: {
            OrderID: '',
            ProductID: '',
            Qty: '',
            Discount: ''
        },
        //create 送出 list 使用
        data_res_arr: [],
    }),

    actions: {
        //初次載入頁面時
        async getOrder_api() {
            try {
                app_store.isLoading = true
                const req = await getOrder_page(app_store.page.Page, app_store.page.Page_size)
                this.data = req.data
                app_store.req_page = req.page
            } catch (e) {
                console.error('Error fetching orders:', e)
            } finally {
                this.data_reset()
                await app_store.Check_Max_page()
            }
        },
        //頁面更新時
        async getPageOrder_api() {
            try {
                app_store.isLoading = true
                const req = await getOrder_page(app_store.page.Page, app_store.page.Page_size)
                this.data = req.data
            } catch (e) {
                console.error('Error fetching orders:', e)
            } finally {
                this.data_reset()
            }
        },

        async createOrder_api() {
            try {
                //送出前清理 不必要值等等
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
            if (this.data_res.OrderID == '' || this.data_res.ProductID == '' || this.data_res.Qty == '' || this.data_res.Qty == '') {
                return alert("請給完整資料")
            }
            try {
                //送出前清理 不必要值等等
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
                //送出前清理 不必要值等等
                const cleanData = app_store.cleanEmptyToNull(this.data_res)
                const req = await delOrder(cleanData)
                alert(req.message)
            } catch (e) {
                console.error('Error fetching orders:', e)
            } finally {
                await this.getOrder_api()
            }
        },

        data_reset() {
            this.data_res = {
                OrderID: '',
                ProductID: '',
                Qty: '',
                Discount: '',
            }
        },
    }
})