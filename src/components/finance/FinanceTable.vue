<template>
  <base-table :mods="['base-table--blue', 'base-table--accent']">
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
      <tr v-for="item in all" :key="item.ip + item.id">
        <td>{{ item.type }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.sum }}</td>
        <td>{{ item.last_deposit }}</td>
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
import mockPayments from '@/mock/pays.json';
import mockFees from '@/mock/fees.json';


export default {
  computed: {
    payments() {
      const payments = [];
      mockPayments.forEach((el) => {
        el.type = 'payment';
        payments.push(el);
      })
      return payments;
    },
    fees() {
      const fees = [];
      mockFees.forEach((el) => {
        el.type = 'fee';
        fees.push(el);
      })
      return fees;
    },
    all() {
      return [...this.payments, ...this.fees];
    }
  },
};
</script>

<style></style>
