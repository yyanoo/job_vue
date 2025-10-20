<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  columns: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    default: () => []
  },
})
</script>

<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th v-for="(col, i) in columns" :key="i">{{ col.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in data" :key="i" @click="$emit('rowClick', row)">
        <td v-for="(col, j) in columns" :key="j">{{ row[col.field] }}</td>
      </tr>
    </tbody>
  </table>

  <div v-if="loading">Loading...</div>
  <div v-else-if="!data.length">No data available</div>
</template>

<style scoped></style>
