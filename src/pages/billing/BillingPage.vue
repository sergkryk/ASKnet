<template>
  <section class="user">
    <h1>The Billing Page</h1>
    <!-- <div class="container">
      <h1 class="user__title title">Кабинет пользователя</h1>
      <div class="user__content">
        <h2 class="user__subtitle subtitle">Интернет</h2>
        <user-widgets :user="user"></user-widgets>
      </div>
      <div class="user__content">
        <h2 class="user__subtitle subtitle">Текущий баланс</h2>
        <span class="user__balance">{{ user.deposit }}&#8381;</span>
        <site-table :finance="user.finance"></site-table>
        <div class="user__buttons-wrapper">
          <button type="button" class="site-button">Финансовая выписка</button>
          <button type="button" class="site-button site-button--green">
            Внести карту оплаты
          </button>
        </div>
      </div>
      <div class="user__content">
        <h2 class="user__subtitle subtitle">Личные данные</h2>
        <user-info :address="user.pi"></user-info>
      </div>
    </div> -->
  </section>
</template>

<script>
// import UserWidgets from "../UserWidgets.vue";
// import UserInfo from "../UserInfo.vue";
// import SiteTable from "../SiteTable.vue";

// import { API_URL } from "../../config";

export default {
  components: {
    // UserWidgets,
    // UserInfo,
    // SiteTable,
  },
  data() {
    return {
      // user: null,
    };
  },
  created() {
    // this.fetchUser();
  },
  methods: {
    // async fetchUser() {
    //   this.user = await (await fetch(`${API_URL}/user/${this.$route.params.userId}`)).json()
    // },
  },
};
</script>

<style lang="scss">
.user {
  color: var(--font-color);
  padding: 2rem 0;
}
.user__title {
  margin: 0 0 2rem;
}
.user__content {
  margin-bottom: 2rem;
  padding: 2rem;

  box-shadow: var(--box-shadow);
  border-radius: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
}
.user__subtitle {
  margin-top: 0;
}
.user__balance {
  display: block;

  font-size: 3.5rem;
  line-height: 3.5rem;
  font-weight: 700;
}
.user__buttons-wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: right;
  align-items: center;

  button:last-child {
    margin-left: 2rem;
  }
}
</style>
