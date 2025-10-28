<script setup>
import { useProductStore } from '../store/product_store';

const use_product = useProductStore()

const onclick = async () => {
    await use_product.find_Product()
    console.log(use_product.check)
    if (use_product.check == null){
        alert('aaa')
    }
}
</script>

<template>
    <div class="controller">
        <div class="d-flex">
            <div class="fs-5" style="margin-right: 10px;">Order</div>
            <input type="text" style="margin-right: 10px;" v-model="use_product.data_res.ProductID">
            <button @click="onclick">click</button>
        </div>
    </div>
</template>

<style scoped></style>