<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" fill="currentColor" class="bi bi-chevron-double-left"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
            d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
        <path fill-rule="evenodd"
            d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
    </svg>
</template>

<script setup>
defineProps({
    size: { type: [String, Number], default: 16 } // 可傳入 12、24、32 之類
})
</script>