<script setup>
import { ref, watch } from 'vue';
import { useAppStore } from '../store/app_store'

const use_app = useAppStore()
const num = ref(1)

const props = defineProps({
    onPage: {
        type: Function,
        default: null
    }
})

const min_num = () => {
    if (num.value > 1) {
        num.value = Math.max(num.value - 1, 1)
        use_app.page.Page = num.value
        props.onPage()
    }
}

const min_num_5 = () => {
    if (num.value > 1) {
        num.value = Math.max(num.value - 5, 1)
    } else if (num.value === 1) {
        return
    }
    use_app.page.Page = num.value
    props.onPage()
}

const add_num = () => {
    if (num.value == use_app.max_pages) {
        alert('已載入所以資料')
    } else {
        num.value += 1
        use_app.page.Page = num.value
        props.onPage()
    }
}

const add_num_5 = () => {
    if (num.value == use_app.max_pages) {
        return alert('已載入所以資料')
    }
    const n = num.value
    if ((n + 5) > (use_app.max_pages)) {
        num.value = use_app.max_pages
        use_app.page.Page = use_app.max_pages
        props.onPage()
    } else {
        num.value += 5
        use_app.page.Page = num.value
        props.onPage()
    }
}

watch(num, (newVal) => {
    if (newVal < 1) {
        num.value = 1
    }
    if (newVal > use_app.max_pages) {
        if (num.value !== use_app.max_pages) num.value = use_app.max_pages
    }
    use_app.page.Page = num.value
})
</script>

<template>
    <div class="d-flex">
        <button class="btn btn-primary" @click="min_num_5" style="margin-right: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                <path fill-rule="evenodd"
                    d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
            5</button>
        <button class="btn btn-primary" @click="min_num" style="margin-right: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
        </button>
        <input type="number" min="0" v-model="num">
        <button class="btn btn-primary" @click="add_num" style="margin-left: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
        </button>
        <button class="btn btn-primary" @click="add_num_5" style="margin-left: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708" />
                <path fill-rule="evenodd"
                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
            5</button>
    </div>
</template>

<style scoped></style>