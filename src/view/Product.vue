<script setup>
import { onMounted } from 'vue';
import { getProduct } from '../service/product_api';

onMounted(async () => {
    const data = await getProduct()
    console.log(data)
})
</script>

<template>

</template>

<style scoped></style>