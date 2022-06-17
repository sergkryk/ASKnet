<template>
  <base-table :mods="['base-table--blue', 'base-table--accent']" v-if="operations">
    <template #theader>
      <tr>
        <th>Тип операции</th>
        <th>Дата</th>
        <th>Сумма</th>
        <th>Баланс</th>
        <th>Детали</th>
      </tr>
    </template>
    <template #tbody>
      <tr v-for="item in operations" :key="item.ip + item.id">
        <td>{{ getType(item.type) }}</td>
        <td>{{ dateToString(item.date) }}</td>
        <td>{{ formatSum(item.sum) }}</td>
        <td>{{ formatSum(item.last_deposit) }}</td>
        <td>{{ item.dsc }}</td>
      </tr>
    </template>
    <template #tfooter>
      <tr>
        <td></td>
      </tr>
    </template>
  </base-table>
</template>

<script>
import { dateToString, valueToMoney } from '@/utils/utils.js';

export default {
  props: {
    operations: {
      type: Array,
      required: true,
    }
  },
  methods: {
    dateToString(value) {
      return dateToString(value)
    },
    formatSum(value) {
      return valueToMoney(value);
    },
    getType(value) {
      const types = {
        fee: {
          label: "Списание"
        },
        payment: {
          label: "Оплата"
        }
      }
      return types?.[value].label;
    },
    
  }
};
</script>

<style></style>
