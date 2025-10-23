<!-- OrderModal.vue - 獨立的 Modal 元件 -->
<template>
    <div class="modal fade" id="orderModal" tabindex="-1" aria-labelledby="orderModalLabel">
        <div class="modal-dialog">
            <div class="modal-content" style="transform: translateY(150px);">
                <div class="container">
                    <div class="text-content" v-if="currentItem">
                        <div class="Title">
                            <h3>OrderID : {{ currentItem.orderID }}</h3>
                            <div class="button_close" data-bs-dismiss="modal" style="transform: translateY(-10px);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                    class="bi bi-x" viewBox="0 0 16 16">
                                    <path
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                        </div>

                        <div class="d-flex">
                            <p>ProductID : {{ currentItem.productID }}</p>
                            <p>Qty : {{ currentItem.qty }}</p>
                            <p>Discount : {{ currentItem.discount }}</p>
                        </div>

                        <div style="margin-bottom: 20px;">
                            <div class="d-flex">
                                Qty :
                                <input type="text" placeholder="Qty"
                                    style="margin-bottom: 10px; margin-left: 15px; width: 300px;"
                                    v-model="formData.qty">
                            </div>
                            <div class="d-flex">
                                Discount :
                                <input type="text" placeholder="Discount" style="margin-left: 15px; width: 300px;"
                                    v-model="formData.discount">
                            </div>
                        </div>

                        <div class="d-flex" style="margin-bottom: 20px;">
                            <button class="btn btn-primary" @click="handleUpdate" data-bs-dismiss="modal">
                                Update
                            </button>
                            <button class="btn btn-primary" @click="handleDelete" data-bs-dismiss="modal">
                                Del
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const currentItem = ref(null)
const formData = reactive({
    qty: '',
    discount: ''
})

const emit = defineEmits(['update', 'delete'])

// 開啟 modal 並設定當前資料
const open = (item) => {
    currentItem.value = item
    formData.qty = item.qty || ''
    formData.discount = item.discount || ''
}

const handleUpdate = () => {
    if (currentItem.value) {
        emit('update', {
            ...currentItem.value,
            qty: formData.qty,
            discount: formData.discount
        })
    }
}

const handleDelete = () => {
    if (currentItem.value) {
        emit('delete', currentItem.value)
    }
}

// 暴露 open 方法給父元件使用
defineExpose({ open })
</script>

<style scoped>
.Title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button_close {
    cursor: pointer;
}

.button_close:hover {
    opacity: 0.7;
}

.d-flex {
    display: flex;
    gap: 15px;
}

.text-content {
    padding: 20px;
}
</style>