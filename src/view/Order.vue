<script setup>
import { onMounted } from 'vue';
import { useOrderStore } from '../store/order_store';

const orderStore = useOrderStore()

onMounted(async () => {
    await orderStore.getOrder_api()
    setTimeout(() => {
        orderStore.IsLaoding = false
    }, 1000)
})

const Create = async () => {
    await orderStore.createOrder_api()
    setTimeout(() => {
        orderStore.IsLaoding = false
    }, 1000)
}
const Update = async () => {
    await orderStore.updateOrder_api()
    setTimeout(() => {
        orderStore.IsLaoding = false
    }, 1000)

}
const Del = async () => {
    await orderStore.delOrder_api()
    setTimeout(() => {
        loading.value = false
    }, 1000)
}

</script>

<template>
    <div class="container test">
        <div class="test1">
            <h3 class="fs-3">Order</h3>
            <div class=""><input type="text" placeholder="Type to search..."></div>
        </div>
        <div class="">
            <div class="test1">
                <div class=""><input type="text" placeholder="OrderID" v-model="orderStore.data_res.OrderID"></div>
                <div class=""><input type="text" placeholder="ProductID" id="product"
                        v-model="orderStore.data_res.ProductID"></div>
                <div class=""><input type="text" placeholder="Qty" id="qty" v-model="orderStore.data_res.Qty"></div>
                <div class=""><input type="text" placeholder="Discount" id="discount"
                        v-model="orderStore.data_res.Discount"></div>
            </div>
            <div class="test1">
                <button @click="Create">Create</button>
                <button @click="Update">Update</button>
                <button @click="Del">Del</button>
            </div>
        </div>
        <div class="">
            <div v-if="orderStore.IsLaoding">Loading...</div>
            <div v-else-if="orderStore.data.length > 0">
                <!-- Or display all orders -->
                <div v-for="item in orderStore.data" :key="`${item.orderID}-${item.productID}`">
                    <p>Order: {{ item.orderID }} | Product: {{ item.productID }} | Qty: {{ item.qty }} | Discount: {{
                        item.discount }}%</p>
                </div>
            </div>
            <div v-else>No orders found</div>
        </div>
    </div>
</template>

<style scoped>
.test {
    display: flex;
    justify-content: center;
    flex-direction: column;

    margin: 20px 0 0 0;
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
