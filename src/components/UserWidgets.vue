<template>
  <ul class="bar">
    <status-widget :content="status"></status-widget>
    <dates-widget :content="expire"></dates-widget>
    <tariff-widget :content="user.tp.tp_name"></tariff-widget>
    <login-widget :content="user.login"></login-widget>
    <password-widget :content="user.password"></password-widget>
    <cid-widget :content="user.cid"></cid-widget>
  </ul>
</template>

<script>
import StatusWidget from "./widgets/StatusWidget.vue";
import DatesWidget from "./widgets/DatesWidget.vue";
import TariffWidget from "./widgets/TariffWidget.vue";
import PasswordWidget from "./widgets/PasswordWidget.vue";
import CidWidget from "./widgets/CidWidget.vue";
import LoginWidget from "./widgets/LoginWidget.vue";
import { formatDate } from '../utils';

export default {
  props: {
    user: {
      type: Object,
      required: true,
    }
  },
  components: {
    StatusWidget,
    DatesWidget,
    TariffWidget,
    LoginWidget,
    PasswordWidget,
    CidWidget,
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
