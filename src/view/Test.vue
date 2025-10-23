<script setup>
import { ref } from 'vue'

const num = ref(0)

let data = []

const getApi = async () => {
    const res = await fetch(`https://backend-33mc.onrender.com/cards`)
    ///將 req 存入 data
    data = await res.json();
    console.log(data)
}

const getLenght = () => {
    //顯示 data arr 裏面的值
    console.log(data[num.value])
}

const getName = () => {
    //顯示 data arr .name的名字
    console.log(data[num.value].name)
}

</script>

<template>
    <div class=""><button @click="getApi">Test Click</button></div>

    <div class="">
        <button @click="getLenght">Check data arr</button>
        <input type="number" placeholder="輸入 要找的 arr num" name="" id="" v-model="num">
    </div>

    <div class="">
        <button @click="getName">Get Name arr</button>
        <input type="number" placeholder="輸入 要找的 arr num" name="" id="" v-model="num">
    </div>
</template>

<style scoped></style>
