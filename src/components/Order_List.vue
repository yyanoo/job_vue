<script setup>
import { defineProps } from 'vue'

const props = defineProps({

  data: {
    type: Array,
    default: () => []
  },
})
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
      <div class="modal-dialog modal-dialog-centered">
        <div class="test1">
          <div class="modal-content">
            <div class="container">
              <div class="text-content">

                <div class="destop-button-container">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>

                <h3>OrderID : {{ item.orderID }}</h3>
                <p>{{ item.productID }}</p>
                <div class="">

                  <input type="text" placeholder="test">
                  <input type="text" placeholder="test">
                  <input type="text" placeholder="test">
                  <input type="text" placeholder="test">
                </div>

                <div class="">

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

</style>
