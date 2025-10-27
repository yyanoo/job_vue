<script setup>
import { onMounted, computed, ref } from 'vue';
import { useAppStore } from '../store/app_store'
import { usePagination } from '../components/Change_page/ChangePage';

const use_app = useAppStore()
const { num } = usePagination()

const props = defineProps({
    onPage: {
        type: Function,
        default: null
    }
})

// 初始化取得總頁數
onMounted(async () => {
    await use_app.Get_Page_order()
    totalPages.value = use_app.max_pages
    currentPage.value = use_app.page.Page
})

const currentPage = ref(1)
// 最大分頁按鈕數
const maxVisible = 5
// 從 store 拿到的總頁數
const totalPages = ref(0)

// 計算要顯示的頁碼範圍
const pageRange = computed(() => {
    const half = Math.floor(maxVisible / 2)
    let start = currentPage.value - half
    let end = currentPage.value + half //maxVisible 爲雙數時 加上 -1

    // 避免超出邊界
    if (start < 1) {
        start = 1
        end = maxVisible
    }
    if (end > totalPages.value) {
        end = totalPages.value
        start = totalPages.value - maxVisible + 1
    }
    if (start < 1) start = 1
    num.value = currentPage.value
    return {
        start,
        end,
        current: currentPage.value,
        pages: Array.from({ length: end - start + 1 }, (_, i) => start + i)
    }
})

// 按鈕點擊
const Onclick = (page) => {
    currentPage.value = page
    use_app.page.Page = currentPage.value
}

// 上一頁 / 下一頁
const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
        use_app.page.Page = currentPage.value
    }
}
const prevPage5 = () => {
    if (currentPage.value > 1) {
        const n = currentPage.value
        if (n - 5 < 1) {
            currentPage.value = 1
            use_app.page.Page = currentPage.value
        }
        else {
            currentPage.value -= 5
            use_app.page.Page = currentPage.value
        }
    }
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
        use_app.page.Page = currentPage.value
    }
}

const nextPage5 = () => {
    if (currentPage.value < totalPages.value) {
        const n = currentPage.value
        if (n + 5 > totalPages.value) {
            currentPage.value = totalPages.value
            use_app.page.Page = currentPage.value
        }
        else {
            currentPage.value += 5
            use_app.page.Page = currentPage.value
        }
    }
}

</script>

<template>
    <div class="d-flex align-items-center">
        <!-- 上一頁 -->
        <button class="btn btn-primary me-2" @click="prevPage5" :disabled="currentPage === 1">-5</button>
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
        <button class="btn btn-primary ms-2" @click="nextPage5" :disabled="currentPage === totalPages">+5</button>
    </div>
</template>

<style scoped>
button.active {
    background-color: #007bff50;
    color: white;
}
</style>