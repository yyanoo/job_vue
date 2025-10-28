<script setup>
import { computed } from 'vue';
import { useAppStore } from '../../store/app_store'
import { usePagination } from './ChangePage';

const use_app = useAppStore()
const { num } = usePagination()

const props = defineProps({
    onPagebar: {
        type: Function,
        default: null
    }
})

const currentPage = num
const maxVisible = 5

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
    if (end > use_app.max_pages) {
        end = use_app.max_pages
        start = use_app.max_pages - maxVisible + 1
    }
    if (start < 1) start = 1
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
    props.onPagebar()
}

// 上一頁 / 下一頁
const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
        use_app.page.Page = currentPage.value
        props.onPagebar()
    }
}
const prevPage5 = () => {
    if (currentPage.value > 1) {
        const n = currentPage.value
        if (n - 5 < 1) {
            currentPage.value = 1
            use_app.page.Page = currentPage.value
            props.onPagebar()
        }
        else {
            currentPage.value -= 5
            use_app.page.Page = currentPage.value
            props.onPagebar()
        }
    }
}

const nextPage = () => {
    if (currentPage.value < use_app.max_pages) {
        currentPage.value++
        use_app.page.Page = currentPage.value
        props.onPagebar()
    }
}

const nextPage5 = () => {
    if (currentPage.value < use_app.max_pages) {
        const n = currentPage.value
        if (n + 5 > use_app.max_pages) {
            currentPage.value = use_app.max_pages
            use_app.page.Page = currentPage.value
            props.onPagebar()
        }
        else {
            currentPage.value += 5
            use_app.page.Page = currentPage.value
            props.onPagebar()
        }
    }
}

</script>

<template>
    <div class="d-flex align-items-center">
        <!-- 上一頁 -->
        <button class="btn btn-primary me-2" @click="prevPage5">-5</button>
        <button class="btn btn-primary me-2" @click="prevPage">-</button>

        <!-- 動態頁碼按鈕 -->
        <div class="d-flex" v-for="page in pageRange.pages" :key="page">
            <button class="btn btn-primary" :class="{ active: currentPage === page }"
                style="margin-left: 5px; margin-right: 5px;" @click="Onclick(page)">
                {{ page }}
            </button>
        </div>

        <!-- 下一頁 -->
        <button class="btn btn-primary ms-2" @click="nextPage">+</button>
        <button class="btn btn-primary ms-2" @click="nextPage5">+5</button>
    </div>
</template>

<style scoped>
button.active {
    background-color: #007bff50;
    color: white;
}
</style>