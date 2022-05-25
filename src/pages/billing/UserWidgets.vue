<template>
  <ul class="bar">

  </ul>
</template>

<script>
import { formatDate } from '../utils';

export default {
  props: {
    user: {
      type: Object,
      required: true,
    }
  },
  computed: {
    status() {
      return this.user.deposit > 0 ? 'Активен' : 'Отключен';
    },
    expire() {
      return formatDate(this.user.finance.expireDate);
    }
  }
}
</script>

<style lang="scss">
.bar {
  width: 100%;
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 1rem;

  list-style: none;
}
</style>
