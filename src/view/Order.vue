<script setup>
import { onMounted } from 'vue';
import { useAppStore } from '../store/app_store';
import { useOrderStore } from '../store/order_store';

import Change_page from '../components/Change_page.vue';
import Loading from '../components/Loading.vue'
import Order_List from '../components/Order_List.vue';

const app_store = useAppStore()
const order_store = useOrderStore()

onMounted(async () => {
    await order_store.getOrder_api()
    await app_store.Loading_end(500)
})

const GetPage = async () => {
    await order_store.getPageOrder_api()
    await app_store.Loading_end(500)
}

const Create = async () => {
    await order_store.createOrder_api()
    await app_store.Loading_end(500)
}

const Update = async () => {
    await order_store.updateOrder_api()
    await app_store.Loading_end(500)
}

const Del = async () => {
    await order_store.delOrder_api()
    await app_store.Loading_end(500)
}
</script>

<template>
    <div class="">
        <div class="test1">
            <h3 class="fs-3">Order</h3>
        </div>
        <div class="">
            <div class="test1">
                <div class=""><input type="text" placeholder="OrderID" v-model="order_store.data_res.OrderID"></div>

                <div class=""><input type="text" placeholder="ProductID" id="product"
                        v-model="order_store.data_res.ProductID"></div>

                <div class=""><input type="text" placeholder="Qty" id="qty" v-model="order_store.data_res.Qty"></div>
                <div class=""><input type="text" placeholder="Discount" id="discount"
                        v-model="order_store.data_res.Discount"></div>
            </div>
            <div>
                <button @click="Create" class="btn btn-primary">Create</button>
            </div>
        </div>


        <div class="" style="margin-bottom: 10px;">
            <Loading :loading="app_store.isLoading">
                <div v-if="order_store.data.length > 0">
                    <Order_List :data="order_store.data" :on-update="Update" :on-delete="Del" />
                </div>
                <div v-else>No orders found</div>
            </Loading>
        </div>


        <div class="">
            <div class="test0" style="margin-bottom: 10px;">
                <Change_page :on-page="GetPage" />
            </div>
            <!-- 送出需要查詢的頁面 到後端 -->
            <div class="test0"><button class="btn btn-primary" @click="GetPage">送出</button></div>
        </div>
    </div>
</template>

<style scoped>
.test0 {
    display: flex;
    justify-content: center;
}

.test1 {
    display: flex;
    flex-direction: row;
    margin: 0 0 10px 0;
}

.fs-3 {
    margin: 0 15px 20px 0;
}

@media screen and (max-width: 768px) {
    .test1 {
        display: flex;
        flex-direction: column;
        margin: 0 0 10px 0;
    }
}
</style>
