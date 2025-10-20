<script setup>
import { useAppStore } from '../store/app_store';
const app_store = useAppStore()
</script>

<template>
    <div v-if="app_store.IsLaoding">Loading...</div>
</template>

<style scoped></style>
