<script setup>
import Header from './Header.vue';
</script>

<template>
    <Header></Header>
    <div class="container">
        <div class="page"><router-view /></div>
    </div>
</template>

<style scoped>
.page {
    padding: 25px 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
}
</style>
