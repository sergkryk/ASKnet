<template>
  <section class="user" @click="getInfo">
    <div class="container">
      <h1 class="user__title title">Кабинет пользователя</h1>
      <div class="user__content">
        <h2 class="user__subtitle subtitle">Интернет</h2>
        <status-bar></status-bar>
      </div>
      <div class="user__content">
        <h2 class="user__subtitle subtitle">Текущий баланс</h2>
        <span class="user__balance">162&#8381;</span>
        <site-table></site-table>
        <div class="user__buttons-wrapper">
          <button type="button" class="site-button">Финансовая выписка</button>
          <button type="button" class="site-button site-button--green">
            Внести карту оплаты
          </button>
        </div>
      </div>
      <div class="user__content">
        <h2 class="user__subtitle subtitle">Личные данные</h2>
        <user-info></user-info>
      </div>
    </div>
  </section>
</template>

<script>
import StatusBar from "../StatusBar.vue";
import UserInfo from "../UserInfo.vue";
import SiteTable from "../SiteTable.vue";

export default {
  components: {
    StatusBar,
    UserInfo,
    SiteTable,
  },
  data() {
    return {
      id: 196,
      backEndUrl: "http://192.168.88.200:9000/users/",
      user: '',
    };
  },
  methods: {
    getInfo() {
      console.log(this.user);
    }
  },
  created() {
    this.user = fetch(`${this.backEndUrl}${this.id}`)
      .then((response) => {
        this.user = response.json();
        console.log(this.user);
      })
      .catch((error) => {
        console.error("Error:", error);
    });
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