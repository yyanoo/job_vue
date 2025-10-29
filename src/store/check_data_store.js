import { defineStore } from 'pinia'
import { Check_product, Check_order } from '../service/check_data_api'

export const useCheckStore = defineStore('check', {

    state: () => ({
        data: [],
        check_bool: {},
        check: {},
    }),

    actions: {
        clear_check() {
            this.check = {}
        },

        async check_product(data) {
            const req = await Check_product(data)
            //檢查req productid 是不是 null 
            this.check = req.data
            if (!this.check) return false
            this.data.push(req.data) // 新增
            console.log(this.data)
        },

        async check_order(data) {
            //確保 資料
            if (!this.check_bool) {
                this.check_bool = { data: null };
            }
            const req = await Check_order(data)
            this.check_bool.data = req.data ? true : false;
        },
    }
})