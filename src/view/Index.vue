<script setup>
import { ref, computed } from 'vue'
import Change_page_bar from '../components/Change_page/Change_page_bar.vue'

// 模擬數據
const totalPages = 100
const currentPage = ref(1)
const maxVisible = 10 // 每次顯示幾個按鈕

// 計算顯示的頁碼範圍
const visiblePages = computed(() => {
    const half = Math.floor(maxVisible / 2)
    let start = currentPage.value - half
    let end = currentPage.value + half - 1

    // 避免超出邊界
    if (start < 1) {
        start = 1
        end = maxVisible
    }
    if (end > totalPages) {
        end = totalPages
        start = totalPages - maxVisible + 1
    }

    if (start < 1) start = 1 // 再保險一次

    // 回傳要顯示的頁碼
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

// 切換頁面
const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
        currentPage.value = page
    }
}
</script>

<template>
    <div class="pagination">
        <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Prev</button>

        <button v-for="page in visiblePages" :key="page" :class="{ active: page === currentPage }"
            @click="changePage(page)">
            {{ page }}
        </button>

        <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
    </div>

    <p>目前頁面：{{ currentPage }}</p>

    <Change_page_bar />
</template>

<style scoped>
.pagination {
    display: flex;
    gap: 6px;
}

button {
    padding: 4px 8px;
}

button.active {
    background-color: #007bff;
    color: white;
    border-radius: 4px;
}
</style>