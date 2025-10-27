<script setup>
import { useAppStore } from '../../store/app_store'
import { usePagination } from './ChangePage';

const use_app = useAppStore()
const { num, min_num, min_num_5, add_num, add_num_5 } = usePagination()

const props = defineProps({
    onPage: {
        type: Function,
        default: null
    }
})

const add_page = async () => {
    await add_num()
    props.onPage()
}

const add_page5 = async () => {
    await add_num_5()
    props.onPage()
}

const min_page = async () => {
    await min_num()
    props.onPage()
}

const min_page5 = async () => {
    await min_num_5()
    props.onPage()
}
</script>

<template>
    <div class="d-flex">
        <!-- 往後 x頁 -->
        <button class="btn btn-primary" @click="min_page5" style="margin-right: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                <path fill-rule="evenodd"
                    d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
            5</button>
        <button class="btn btn-primary" @click="min_page" style="margin-right: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
        </button>
        <!-- 換頁 Input -->
        <div class="d-flex align-items-center">
            <input style="width: 50px;" type="number" min="0" v-model="num">
            <div class="" style="margin-left: 10px;">{{ `/${use_app.max_pages}頁` }}</div>
        </div>
        <!-- 往前 x頁 -->
        <button class="btn btn-primary" @click="add_page" style="margin-left: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
        </button>
        <button class="btn btn-primary" @click="add_page5" style="margin-left: 10px;">
            5
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708" />
                <path fill-rule="evenodd"
                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
        </button>
    </div>
</template>

<style scoped></style>