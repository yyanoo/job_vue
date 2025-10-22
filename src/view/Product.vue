<script setup>
import { onMounted } from 'vue';
import { useAppStore } from '../store/app_store';
import { useProductStore } from '../store/product_store';

import Loading from '../components/Loading.vue';

const product_store = useProductStore()
const app_store = useAppStore()

const columns = [
    { label: '商品編號', field: 'productID' },
    { label: 'EAN', field: 'ean' },
    { label: '商品名稱', field: 'name' },
    { label: '定價', field: 'listPrice' },
    { label: '成本', field: 'cost' },
]

onMounted(async () => {
    await product_store.getProduct_api()
    const data = product_store.data
    console.log(data)
})
</script>

<template>
    <Loading :loading="app_store.isLoading">
    </Loading>
</template>

<style scoped></style>