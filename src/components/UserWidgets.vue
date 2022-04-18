<template>
  <ul class="bar">
    <status-widget :content="user.login"></status-widget>
    <dates-widget :content="user.expire"></dates-widget>
    <tariff-widget :content="user.tariff"></tariff-widget>
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
