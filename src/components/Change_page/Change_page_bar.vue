<script setup>
//store import
import { usePageStore } from './ChangePage';
const use_page = usePageStore()

//icon improt
import Chevron_left from '../Icon/Chevron_left.vue';
import Chevron_double_left from '../Icon/Chevron_double_left.vue';
import Chevron_right from '../Icon/Chevron_right.vue';
import Chevron_double_right from '../Icon/Chevron_double_right.vue';


const props = defineProps({
    onPage: {
        type: Function,
        default: null
    }
})

// 按鈕點擊
const Onclick = async (page) => {
    await use_page.click(page)
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
        <button class="btn btn-primary me-2" @click="prevPage5">
            <Chevron_double_left size="16" />
            5
        </button>
        <button class="btn btn-primary me-2" @click="prevPage">
            <Chevron_left size="16" />
        </button>

        <!-- 動態頁碼按鈕 -->
        <div class="d-flex" v-for="page in use_page.pageRange.pages" :key="page">
            <button class="btn btn-primary" :class="{ active: use_page.num === page }"
                style="margin-left: 5px; margin-right: 5px;" @click="Onclick(page)">
                {{ page }}
            </button>
        </div>

        <!-- 下一頁 -->
        <button class="btn btn-primary ms-2" @click="nextPage">
            <Chevron_right size="16" />
        </button>
        <button class="btn btn-primary ms-2" @click="nextPage5">
            5
            <Chevron_double_right size="16" />
        </button>
    </div>
</template>

<style scoped>
button.active {
    background-color: #007bff50;
    color: white;
}
</style>