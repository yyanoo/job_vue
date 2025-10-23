<!-- ParentComponent.vue -->
<template>
  <div class="container">
    <!-- 資料列表 -->
    <div v-for="item in data" :key="`${item.orderID}-${item.productID}`">
      <button 
        class="btn btn-info" 
        @click="openModal(item)"
        data-bs-toggle="modal" 
        data-bs-target="#orderModal">
        View Order {{ item.orderID }}
      </button>
    </div>

    <!-- 只有一個 Modal 實例 -->
    <OrderModal 
      ref="modalRef"
      @update="handleUpdate" 
      @delete="handleDelete" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import OrderModal from './OrderModal.vue'

const data = ref([
  { orderID: 1, productID: 101, qty: 5, discount: 10 },
  { orderID: 2, productID: 102, qty: 3, discount: 15 },
  { orderID: 3, productID: 103, qty: 8, discount: 5 },
  // ... 更多資料
])

const modalRef = ref(null)

const openModal = (item) => {
  modalRef.value?.open(item)
}

const handleUpdate = (updatedItem) => {
  const index = data.value.findIndex(
    item => item.orderID === updatedItem.orderID && 
            item.productID === updatedItem.productID
  )
  if (index !== -1) {
    data.value[index] = { ...data.value[index], ...updatedItem }
  }
  console.log('Updated:', updatedItem)
}

const handleDelete = (deletedItem) => {
  data.value = data.value.filter(
    item => !(item.orderID === deletedItem.orderID && 
              item.productID === deletedItem.productID)
  )
  console.log('Deleted:', deletedItem)
}
</script>