<script setup>
//store import
import { useAppStore } from '../../store/app_store'
import { usePageStore } from './ChangePage';


//icon improt
import Chevron_left from '../Icon/Chevron_left.vue';
import Chevron_double_left from '../Icon/Chevron_double_left.vue';
import Chevron_right from '../Icon/Chevron_right.vue';
import Chevron_double_right from '../Icon/Chevron_double_right.vue';

const use_app = useAppStore()
const use_page = usePageStore()

const props = defineProps({
    onPage: {
        type: Function,
        default: null
    }
})

const add_page = async () => {
    await use_page.add_num()
    props.onPage()
}

const add_page5 = async () => {
    await use_page.add_num_5()
    props.onPage()
}

const min_page = async () => {
    await use_page.min_num()
    props.onPage()
}

const min_page5 = async () => {
    await use_page.min_num_5()
    props.onPage()
}
</script>

<template>
    <div class="d-flex">
        <!-- 往後 x頁 -->
        <button class="btn btn-primary" @click="min_page5" style="margin-right: 10px;">
            <Chevron_double_left size="16" />
            5
        </button>
        <button class="btn btn-primary" @click="min_page" style="margin-right: 10px;">
            <Chevron_left size="16" />
        </button>

        <!-- 換頁 Input -->
        <div class="d-flex align-items-center">
            <input style="width: 50px;" type="number" min="1" v-model="use_page.num">
            <div style="margin-left: 10px;">{{ `/${use_app.max_pages}頁` }}</div>
        </div>

        <!-- 往前 x頁 -->
        <button class="btn btn-primary" @click="add_page" style="margin-left: 10px;">
            <Chevron_right size="16" />
        </button>
        <button class="btn btn-primary" @click="add_page5" style="margin-left: 10px;">
            5
            <Chevron_double_right size="16" />
        </button>
    </div>
</template>

<style scoped></style>