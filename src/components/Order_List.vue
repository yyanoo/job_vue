<script setup>
import { defineProps, ref } from 'vue'
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

const res_qty = ref(0)
const res_discount = ref(0)

const Update_Props = async (item) => {
  const res_data = {
    OrderID: item.orderID,
    ProductID: item.productID,
    Qty: res_qty.value,
    Discount: res_discount.value
  }
  res_qty.value = 0
  res_discount.value = 0

  order_store.data_res = res_data
  await props.onUpdate()
}

const Del_Props = async (item) => {
  const res_data = {
    OrderID: item.orderID,
    ProductID: item.productID
  }
  order_store.data_res = res_data
  await props.onDelete()
}
</script>

<template>
  <!-- Table -->
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
      <tr v-for="item in data" :key="item.productID">
        <td>{{ item.orderID }}</td>
        <td>{{ item.productID }}</td>
        <td>{{ item.qty }}</td>
        <td>{{ item.discount }}</td>
        <td>
          <button class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#modal-${item.productID}`">
            編輯
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Modal -->
  <div class="container">
    <div v-for="item in data" :key="item.productID">
      <div class="modal fade" :id="'modal-' + item.productID" tabindex="-1"
        :aria-labelledby="'label-modal-' + item.productID">
        <div class="modal-dialog">
          <div class="modal-content" style="transform: translateY(150px);">
            <div class="container">
              <div class="text-content">
                <div class="Title">
                  <h3>OrderID : {{ item.orderID }}</h3>
                  <div class="button_close" data-bs-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x"
                      viewBox="0 0 16 16">
                      <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </div>
                </div>
                <div class="d-flex">
                  <p>ProductID: {{ item.productID }}</p>
                  <p>Qty: {{ item.qty }}</p>
                  <p>Discount: {{ item.discount }}</p>
                </div>

                <div class="" style="margin-bottom: 20px;">
                  <div class="d-flex"> Qty: <input type="text" placeholder="Qty"
                      style="margin-bottom: 10px; margin-left: 15px; width: 300px;" v-model="res_qty">
                  </div>
                  <div class="d-flex"> Discount: <input type="text" placeholder="Discount"
                      style="margin-left: 15px; width: 300px;" v-model="res_discount">
                  </div>
                </div>

                <div class="d-flex" style="margin-bottom: 20px;">
                  <button class="btn btn-primary" @click="Update_Props(item)" data-bs-dismiss="modal">Update</button>
                  <button class="btn btn-primary" @click="Del_Props(item)" data-bs-dismiss="modal">Del</button>
                </div>

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
  justify-content: space-between
}

.Title {
  margin: 20px 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
