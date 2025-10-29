<script setup>
//store import
import { useAppStore } from '../../store/app_store'
import { usePageStore } from './ChangePage';

const use_app = useAppStore()
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
    const n = use_page.num
    await use_page.click(page)
    if (n == use_page.num) return
    props.onPage()
}

const nextPage = async () => {
    const n = use_page.num
    await use_page.add_num()
    if (n == use_app.max_pages) return
    props.onPage()
}

const nextPage5 = async () => {
    const n = use_page.num
    await use_page.add_num_5()
    if (n == use_app.max_pages) return
    props.onPage()
}

const prevPage = async () => {
    const n = use_page.num
    await use_page.min_num()
    if (n == 1) return
    props.onPage()
}
const prevPage5 = async () => {
    const n = use_page.num
    await use_page.min_num_5()
    if (n == 1) return
    props.onPage()
}

</script>

<template>
    <div class="d-flex align-items-center">
        <!-- 上一頁 -->
        <button class="btn btn-primary button_margin" @click="prevPage5">
            <Chevron_double_left size="16" />
        </button>
        <button class="btn btn-primary button_margin" @click="prevPage">
            <Chevron_left size="16" />
        </button>

        <!-- 動態頁碼按鈕 -->
        <div class="d-flex" v-for="page in use_page.pageRange.pages" :key="page">
            <button class="btn btn-primary button_margin" :class="{ active: use_page.num === page }"
                @click="Onclick(page)">
                {{ page }}
            </button>
        </div>

        <!-- 下一頁 -->
        <button class="btn btn-primary button_margin" @click="nextPage">
            <Chevron_right size="16" />
        </button>
        <button class="btn btn-primary button_margin" @click="nextPage5">
            <Chevron_double_right size="16" />
        </button>
    </div>
</template>

<style scoped>
button.active {
    background-color: #007bff50;
    color: white;
}

.button_margin {
    margin: 0 5px;
}

@media screen and (max-width: 576px) {
    .button_margin {
        margin: 0 3px;
    }
}
</style>