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
        alert('已載入所以資料')
    } else if ((num.value += 5) > (use_app.max_pages - 1)) {
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
        <button class="btn btn-primary" @click="min_num_5" style="margin-right: 10px;">-5</button>
        <button class="btn btn-primary" @click="min_num" style="margin-right: 10px;">-</button>
        <input type="number" min="0" v-model="num">
        <button class="btn btn-primary" @click="add_num" style="margin-left: 10px;">+</button>
        <button class="btn btn-primary" @click="add_num_5" style="margin-left: 10px;">+5</button>
    </div>
</template>

<style scoped></style>