<script setup>
import { ref, reactive } from 'vue';
import { useOrderStore } from '../../store/order_store'
import { useCheckStore } from '../../store/check_data_store';


const use_order = useOrderStore()
const use_check = useCheckStore()

const props = defineProps({
    onCreate: {
        type: Function,
        default: null
    },
})

const arr = reactive([])

const orderid = ref('')
const productid = ref('')
const qty = ref()
const discount = ref()
const is_order = ref(false)

//新增 order list 要 res 到後端時將 list 一次送出到後端建立 data
const add_item = async () => {
    //檢查 input 是否 有 data
    if (orderid.value && productid.value && qty.value && discount.value) {

        //確認 discount 和 qty 是否超過 或小於一般 數值
        if (discount.value > 100 || discount.value < 1 || qty.value < 1) {
            return alert("請輸入 Qty 和 Discount");
        }

        //呼叫api 檢查 order
        await use_check.check_order(orderid.value)
        if (use_check.check_bool.data == false) {
            is_order.value = true
        } else if (use_check.check_bool.data == true) {
            return alert("OrderID 已被建立")
        }
        
        //檢查 List 是否有相同 productid
        const check = arr.some(item => item.ProductID === productid.value)
        if (check) {
            return alert("List有相同 Product")
        }

        //呼叫api 檢查 product
        await use_check.check_product(productid.value)
        if (!use_check.check) {
            return alert("找不到相關 Product")
        }

        // 將資料加入陣列
        arr.push({
            OrderID: orderid.value,
            ProductID: productid.value,
            Qty: qty.value,
            Discount: discount.value
        });

        // 清空輸入input 欄位
        productid.value = '';
        qty.value = '';
        discount.value = '';

    } else {
        alert("請填寫完整欄位");
    }
};

const New_Order = async () => {
    add_item()
    use_order.data_res_arr = Array.from(arr)
    console.log(use_order.data_res_arr)
    // if (props.onCreate) {
    //     await props.onCreate()
    // }
}

const del_item = (index) => {
    arr.splice(index, 1);
    use_check.data.splice(index, 1)
    console.log(use_check.data)
}
</script>

<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createOrder">
        Create New Order
    </button>

    <!-- Modal -->
    <div class="modal fade" id="createOrder" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="createOrderLabel" aria-hidden="true">
        <div class="modal-dialog">

            <!-- Model Header -->
            <div class="modal-content" style="transform: translateY(100px);">
                <div class="modal-header" style="margin-top: 10px;">
                    <h1 class="modal-title fs-4" id="createOrderLabel" style="margin-left: 10px;">OrderID :</h1>

                    <!-- OrderID .value -->
                    <!-- 未輸入 OrderID -->
                    <div class="" v-if="!is_order">
                        <input type="text" placeholder="OrderID" v-model="orderid">
                    </div>
                    <!-- 已輸入 OrderID -->
                    <div class="" v-if="is_order">
                        <div class="fs-4" style="margin-left: 10px;">{{ orderid }}</div>
                    </div>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        style="transform: translateY(-15px);"></button>
                </div>

                <!-- Modal Body -->
                <div class="modal-body">
                    <div class="d-flex flex-column ">

                        <!-- 將 list資料 列出來 能夠響應式修改 list資料 -->
                        <div v-for="(item, index) in arr" :key="index" class="d-flex justify-content-center"
                            style="margin-bottom: 10px;">
                            <div class="box">
                                <div class="">ProductID :</div>
                                <!-- Product .value -->
                                <div class="" style="margin-left: 10px; margin-right: 10px;">{{ item.ProductID }}</div>
                            </div>
                            <div class="box">
                                <div class="">Qty :</div>
                                <!-- Qty .value -->
                                <input type="number" class="input-box" v-model="item.Qty">
                                <div class="">Discount :</div>
                                <!-- Discount .value -->
                                <input type="number" class="input-box" v-model="item.Discount">
                                <!-- 刪除 list 對應 index 按鈕 -->
                                <button type="button" class="btn btn-primary" style="margin-left: 20px;"
                                    @click="del_item(index)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-trash3" viewBox="0 0 16 16">
                                        <path
                                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- 將資料存到 ref 並且送出到 list -->
                        <div class="d-flex justify-content-center">
                            <div class="box">
                                <div class="">ProductID :</div>
                                <!-- Product .value -->
                                <input type="text" placeholder="ProductID" id="product" v-model="productid">
                            </div>
                            <div class="box">
                                <div class="">Qty :</div>
                                <!-- Qty .value -->
                                <input type="number" class="input-box" id="qty" v-model="qty">
                                <div class="">Discount :</div>
                                <!-- Discount .value -->
                                <input type="number" class="input-box" id="discount" v-model="discount">
                                <!-- 新增 index到 list -->
                                <button type="button" class="btn btn-primary" style="margin-left: 20px;"
                                    @click="add_item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 送出 req order 按鈕 -->
                <!-- Modal Button -->
                <div class="modal-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-primary" @click="New_Order"
                        data-bs-dismiss="modal">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
input {
    margin: 0 10px;
}

.input-box {
    width: 45px;
}

.box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.box-out {
    display: flex;
    width: 20px;
}

.modal {
    --bs-modal-width: 700px;
}


@media screen and (max-width: 576px) {
    .d-flex {
        flex-direction: column;
    }

    .box {
        margin-top: 20px;
    }
}
</style>