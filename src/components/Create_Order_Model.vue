<script setup>
import { useOrderStore } from '../store/order_store';

const order_store = useOrderStore()

const props = defineProps({
    onCreate: {
        type: Function,
        default: null
    },
})

const New_Order = async () => {
    if (props.onCreate) {
        await props.onCreate()
    }
}
</script>

<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createOrder">
        Create New Order
    </button>

    <!-- Modal -->
    <div class="modal fade" id="createOrder" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="createOrderLabel" aria-hidden="true">
        <div class="modal-dialog">
            <!-- Model Header -->
            <div class="modal-content" style="transform: translateY(150px);">
                <div class="modal-header" style="margin-top: 10px; margin-bottom: 10px;">
                    <h1 class="modal-title fs-5" id="createOrderLabel">OrderID :</h1>
                    <input type="text" placeholder="OrderID" v-model="order_store.data_res.OrderID">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <!-- Modal Body -->
                <div class="modal-body">
                    <div class="d-flex">
                        <div class="box">
                            <div class="">ProductID :</div>
                            <input type="text" placeholder="ProductID" id="product"
                                v-model="order_store.data_res.ProductID">
                        </div>
                        <div class="box">
                            <div class="">Qty :</div>
                            <input type="text" class="input-box" id="qty" v-model="order_store.data_res.Qty">
                            <div class="">Discount :</div>
                            <input type="text" class="input-box" id="discount" v-model="order_store.data_res.Discount">
                        </div>
                    </div>
                </div>
                <!-- Modal Button -->
                <div class="modal-footer d-flex justify-content-between">
                    <!-- <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Add Product</button> -->
                    <button type="button" class="btn btn-primary" @click="New_Order" data-bs-dismiss="modal">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
input {
    margin: 0 10px;
}

.input-box {
    width: 45px;
}

.box {
    display: flex;
    justify-content: space-between;
}

.box-out {
    display: flex;
    width: 20px;
}

.modal {
    --bs-modal-width: 700px;
}


@media screen and (max-width: 576px) {
    .d-flex {
        flex-direction: column;
    }

    .box {
        margin-top: 20px;
    }
}
</style>