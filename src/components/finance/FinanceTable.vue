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
export default {
  props: {
    operations: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style></style>
