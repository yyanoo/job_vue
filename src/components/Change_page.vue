<script setup>
import { ref, watch } from 'vue';
import { useAppStore } from '../store/app_store'

const use_app = useAppStore()
const num = ref(1)

const min_num = () => {
    if (num.value > 1) {
        num.value -= 1
        use_app.page.Page = num.value
    }
}

const add_num = () => {
    num.value += 1
    use_app.page.Page = num.value
}

watch(num, (newVal) => {
    if (newVal < 1) {
        num.value = 1
    }
    use_app.page.Page = num.value
    console.log(`指定一頁 = ${use_app.page.Page}`)
})
</script>

<template>
    <div class="test0">
        <button class="btn btn-primary" @click="min_num" style="margin-right: 10px;">-</button>
        <input type="number" min="0" v-model="num">
        <button class="btn btn-primary" @click="add_num" style="margin-left: 10px;">+</button>
    </div>
</template>

<style scoped>
.test0 {
    display: flex;
}
</style>