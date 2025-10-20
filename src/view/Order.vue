<script setup>
import { onMounted } from 'vue';
import { useAppStore } from '../store/app_store';
import { useOrderStore } from '../store/order_store';

const app_store = useAppStore()
const order_store = useOrderStore()

onMounted(async () => {
    await order_store.getOrder_api()
    app_store.Loading_end()
})

const Create = async () => {
    await order_store.createOrder_api()
    app_store.Loading_end()
}
const Update = async () => {
    await order_store.updateOrder_api()
    app_store.Loading_end()
}
const Del = async () => {
    await order_store.delOrder_api()
    app_store.Loading_end()
}
</script>

<template>
    <div class="">
        <div class="test1">
            <h3 class="fs-3">Order</h3>
            <div class=""><input type="text" placeholder="Type to search..."></div>
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
            <div class="test1">
                <button @click="Create">Create</button>
                <button @click="Update">Update</button>
                <button @click="Del">Del</button>
            </div>
        </div>
        <div class="">
            <div v-if="order_store.IsLaoding">Loading...</div>
            <div v-else-if="order_store.data.length > 0">
                <!-- Or display all orders -->
                <div v-for="item in order_store.data" :key="`${item.orderID}-${item.productID}`">
                    <p>Order: {{ item.orderID }} | Product: {{ item.productID }} | Qty: {{ item.qty }} | Discount: {{
                        item.discount }}%</p>
                </div>
            </div>
            <div v-else>No orders found</div>
        </div>
    </div>
</template>

<style scoped>
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
