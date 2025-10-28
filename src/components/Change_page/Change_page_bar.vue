<script setup>
import { useAppStore } from '../../store/app_store'
import { usePageStore } from './ChangePage';


const use_app = useAppStore()
const use_page = usePageStore()

const props = defineProps({
    onPage: {
        type: Function,
        default: null
    }
})

// 按鈕點擊
const Onclick = (page) => {
    currentPage.value = page
    use_app.page.Page = currentPage.value
    props.onPage()
}

const nextPage = async () => {
    await use_page.add_num()
    props.onPage()
}

const nextPage5 = async () => {
    await use_page.add_num_5()
    props.onPage()
}

const prevPage = async () => {
    await use_page.min_num()
    props.onPage()
}
const prevPage5 = async () => {
    await use_page.min_num_5()
    props.onPage()
}

</script>

<template>
    <div class="d-flex align-items-center">
        <!-- 上一頁 -->
        <button class="btn btn-primary me-2" @click="prevPage5">-5</button>
        <button class="btn btn-primary me-2" @click="prevPage">-</button>

        <!-- 動態頁碼按鈕 -->
        <div class="d-flex" v-for="page in use_page.pageRange.pages" :key="page">
            <button class="btn btn-primary" :class="{ active: use_page.num === page }"
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