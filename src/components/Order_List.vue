<script setup>
import { ref } from 'vue'
import { useOrderStore } from '../store/order_store'

const order_store = useOrderStore()

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  onUpdate: {
    type: Function,
    default: null
  },
  onDelete: {
    type: Function,
    default: null
  }
})

// ====== 表單輸入 ======
const res_qty = ref(0)
const res_discount = ref(0)

// ====== 關鍵:追蹤當前選中的項目 ======
const currentItem = ref(null)

// ====== 開啟 Modal 並設定當前項目 ======
const openModal = (item) => {
  currentItem.value = item
  // 預填現有的值
  res_qty.value = item.qty
  res_discount.value = item.discount
}

// ====== 更新 ======
const Update_Props = async () => {
  if (!currentItem.value) return

  const res_data = {
    OrderID: currentItem.value.orderID,
    ProductID: currentItem.value.productID,
    Qty: res_qty.value,
    Discount: res_discount.value
  }

  order_store.data_res = res_data
  await props.onUpdate()

  // 清空
  res_qty.value = 0
  res_discount.value = 0
  currentItem.value = null
}

// ====== 刪除 ======
const Del_Props = async () => {
  if (!currentItem.value) return

  const res_data = {
    OrderID: currentItem.value.orderID,
    ProductID: currentItem.value.productID
  }

  order_store.data_res = res_data
  await props.onDelete()

  currentItem.value = null
}
</script>

<template>
  <div class="container">
    <!-- ====== Table ====== -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>OrderID</th>
          <th>ProductID</th>
          <th>Qty</th>
          <th>Discount</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="`${item.orderID}-${item.productID}`">
          <td>{{ item.orderID }}</td>
          <td>{{ item.productID }}</td>
          <td>{{ item.qty }}</td>
          <td>{{ item.discount }}</td>
          <td>
            <button class="btn btn-primary" @click="openModal(item)" data-bs-toggle="modal"
              data-bs-target="#orderModal">
              編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- ====== 唯一的 Modal ====== -->
    <div class="modal fade" id="orderModal" tabindex="-1" aria-labelledby="orderModalLabel">
      <div class="modal-dialog">
        <div class="modal-content" style="transform: translateY(150px);">
          <div class="container">
            <!-- 關鍵:用 currentItem 來顯示資料 -->
            <div class="text-content" v-if="currentItem">
              <div class="Title">
                <h3>OrderID : {{ currentItem.orderID }}</h3>
                <div class="button_close" data-bs-dismiss="modal" style="transform: translateY(-10px);">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x"
                    viewBox="0 0 16 16">
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </div>
              </div>

              <!-- 顯示當前資料 -->
              <div class="d-flex">
                <p>ProductID : {{ currentItem.productID }}</p>
                <p>Qty : {{ currentItem.qty }}</p>
                <p>Discount : {{ currentItem.discount }}</p>
              </div>

              <!-- 輸入新資料 -->
              <div class="" style="margin-bottom: 20px;">
                <div class="d-flex">
                  Qty :
                  <input type="number" placeholder="Qty" style="margin-bottom: 10px; margin-left: 15px; width: 300px;"
                    v-model.number="res_qty">
                </div>
                <div class="d-flex">
                  Discount :
                  <input type="number" placeholder="Discount" style="margin-left: 15px; width: 300px;"
                    v-model.number="res_discount">
                </div>
              </div>

              <!-- 操作按鈕 -->
              <div class="d-flex" style="margin-bottom: 20px;">
                <button class="btn btn-primary" @click="Update_Props()" data-bs-dismiss="modal">
                  Update
                </button>
                <button class="btn btn-danger" @click="Del_Props()" data-bs-dismiss="modal">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.d-flex {
  justify-content: space-between;
}

.Title {
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.button_close {
  cursor: pointer;
}

.button_close:hover {
  opacity: 0.7;
}
</style>