<script setup>
import { reactive, ref } from 'vue';

// 定義 arr，存放多筆物件
const arr = reactive([]);

// 用來綁定新增 input 的值
const newId = ref('');
const newCost = ref('');
const ID = ref('')

// 新增資料到 arr
const addItem = () => {
    if (newId.value && newCost.value) {
        // 將資料推入 reactive 陣列
        arr.push({
            TTT: ID.value,
            id: newId.value,
            cost: newCost.value
        });

        // 清空 input
        newId.value = '';
        newCost.value = '';
    }
};

// 刪除指定索引的項目
const deleteItem = (index) => {
    arr.splice(index, 1);
};

const check = () => {
    console.log(arr)
}
</script>

<template>
    <div>
        <!-- 顯示 arr，每筆資料都是可以編輯的 input -->
        <div v-for="(item, index) in arr" :key="index" style="margin-top: 10px;">
            <input type="text" v-model="item.id" />
            <input type="text" v-model="item.cost" />
            <span>→ 編輯即時生效</span>
            <button @click="deleteItem(index)" style="margin-left: 10px;">刪除</button>
        </div>

        <input type="text" v-model="ID" placeholder="ID">
        <!-- 新增欄位 -->
        <input type="text" v-model="newId" placeholder="輸入 ID" />
        <input type="text" v-model="newCost" placeholder="輸入成本" />
        <button @click="addItem">新增</button>
        <button @click="check">Check</button>
    </div>
</template>

<style scoped>
input {
    margin-right: 5px;
}
</style>