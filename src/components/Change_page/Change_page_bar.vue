<script setup>
import { onMounted, ref } from 'vue';
import { useAppStore } from '../../store/app_store'

const use_app = useAppStore()

// 目前頁數
const currentPage = ref(1)
// 最大分頁按鈕數
const maxVisible = 5
// 從 store 拿到的總頁數
const totalPages = ref(0)

// 初始化取得總頁數
onMounted(async () => {
    await use_app.Get_Page_order()
    totalPages.value = use_app.max_pages
})

// 計算要顯示的頁碼範圍


// 按鈕點擊
const Onclick = (page) => {
    currentPage.value = page
    console.log('選擇頁碼:', page)
}

// 上一頁 / 下一頁
const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}
const prevPage_min5 = () => {
    if (currentPage.value > 1) {
        currentPage.value -= 5
    }
}
const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++
}

</script>

<template>
    <div class="d-flex align-items-center">
        <!-- 上一頁 -->
        <button class="btn btn-primary me-2" @click="prevPage_min5" :disabled="currentPage === 1">-5</button>
        <button class="btn btn-primary me-2" @click="prevPage" :disabled="currentPage === 1">-</button>

        <!-- 動態頁碼按鈕 -->
        <div class="d-flex" v-for="page in pageRange.pages" :key="page">
            <button class="btn btn-primary" :class="{ active: currentPage === page }"
                style="margin-left: 5px; margin-right: 5px;" @click="Onclick(page)">
                {{ page }}
            </button>
        </div>

        <!-- 下一頁 -->
        <button class="btn btn-primary ms-2" @click="nextPage" :disabled="currentPage === totalPages">+</button>
    </div>
</template>

<style scoped>
button.active {
    background-color: #007bff50;
    color: white;
}
</style>