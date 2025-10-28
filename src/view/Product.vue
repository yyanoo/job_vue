<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '../store/product_store';

const product_store = useProductStore()

onMounted(async () => {
    await product_store.getProduct_api()
    const data = product_store.data
    console.log(data)
})
</script>

<template>
    <v-for ></v-for>
</template>

<style scoped></style>