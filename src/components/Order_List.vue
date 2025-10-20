<script setup>
import { defineProps, ref } from 'vue'
import { useOrderStore } from '../store/order_store'

const order_store = useOrderStore()

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
})

const res_qty = ref(0)
const res_discount = ref(0)

const Update = async (item) => {
  const res_data = {
    OrderID: item.orderID,
    ProductID: item.productID,
    Qty: res_qty.value,
    Discount: res_discount.value
  }
  res_qty.value = 0
  res_discount.value = 0

  order_store.data_res = res_data
  await order_store.updateOrder_api()
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
          <button data-bs-toggle="modal" :data-bs-target="`#modal-${item.productID}`">
            編輯
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Modal -->
  <div v-for="item in data" :key="item.productID">
    <div class="modal fade" :id="'modal-' + item.productID" tabindex="-1"
      :aria-labelledby="'label-modal-' + item.productID">
      <div class="modal-dialog">
        <div class="modal-content" style="transform: translateY(150px);">
          <div class="container">
            <div class="text-content">

              <h3 style="margin-top: 20px;">OrderID : {{ item.orderID }}</h3>
              <div class="d-flex">
                <p>ProductID: {{ item.productID }}</p>
                <p>Qty: {{ item.qty }}</p>
                <p>Discount: {{ item.discount }}</p>
              </div>

              <div class="">
                <div class="d-flex"> Qty: <input type="text" placeholder="Qty"
                    style="margin-bottom: 10px; margin-left: 15px; width: 300px;" v-model="res_qty">
                </div>
                <div class="d-flex"> Discount: <input type="text" placeholder="Discount"
                    style="margin-bottom: 10px; margin-left: 15px; width: 300px;" v-model="res_discount">
                </div>
              </div>

              <div class="d-flex" style="margin-bottom: 10px;">
                <button @click="Update(item)">Update</button>
                <button>Del</button>
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
</style>
