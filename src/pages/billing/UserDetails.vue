<template>
  <div class="container" v-if="user">
    <h1 class="user__title title">Кабинет пользователя</h1>
    <div class="user__content">
      <h2 class="user__subtitle subtitle">Интернет</h2>
      <ul class="bar">
        <base-card
          title="Статус"
          :content="status"
          :icon="statusIcon"
          buttonTitle="подробнее"
          :clickHandler="showStatus"
        ></base-card>
        <base-card
          title="Действительный до"
          :content="expire"
          icon="calendar"
          buttonTitle="подробнее"
          :clickHandler="showExpireDetails"
        ></base-card>
        <base-card
          title="Тарифный план"
          :content="tariff"
          icon="speedometr"
          buttonTitle="подробнее"
          :clickHandler="showTariff"
        ></base-card>
        <base-card
          title="Имя пользователя"
          :content="user.login"
          icon="user"
          buttonTitle="статистика"
          :clickHandler="showStatistics"
        ></base-card>
        <password-card></password-card>
        <cid-card></cid-card>
      </ul>
    </div>
    <div class="user__content">
      <h2 class="user__subtitle subtitle">Текущий баланс</h2>
      <span class="user__balance">{{ user.deposit }}&#8381;</span>
      <user-finances :finance="user.finance"></user-finances>
      <div class="user__buttons-wrapper">
        <button type="button" class="site-button" @click="showFinance">
          Финансовая выписка
        </button>
        <payment-button></payment-button>
      </div>
    </div>
    <div class="user__content">
      <h2 class="user__subtitle subtitle">Личные данные</h2>
      <user-personal :address="user.pi"></user-personal>
    </div>
  </div>
</template>

<script>
import PasswordCard from "@/components/billing/PasswordCard.vue";
import CidCard from "@/components/billing/CidCard.vue";
import UserPersonal from "@/components/billing/UserPersonal.vue";
import UserFinances from "@/components/billing/UserFinances.vue";
import { USER_DETAILS_URL } from "@/config/config.js";
import { formatDate } from "@/utils/utils";
import PaymentButton from "@/components/ui/PaymentButton.vue";

export default {
  components: {
    CidCard,
    PasswordCard,
    UserPersonal,
    UserFinances,
    PaymentButton,
  },
  methods: {
    async fetchUserDetails() {
      const response = await fetch(USER_DETAILS_URL, {
        headers: this.$store.getters.authHeader,
      });
      const data = await response.json();
      this.$store.dispatch("user/setUser", data);
    },
    showStatistics() {
      this.$router.push("/statistics");
    },
    showFinance() {
      this.$router.push("/finance");
    },
    showTariff() {},
    showExpireDetails() {},
    showStatus() {},
  },
  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
    tariff() {
      return this.user.tp.tp_name;
    },
    status() {
      return this.user.deposit > 0 ? "Активен" : "Отключен";
    },
    statusIcon() {
      return this.status === "Активен" ? "enabled" : "disabled";
    },
    cid() {
      if (this.user.cid.includes(";")) {
        let addresses = this.user.cid.split(";");
        return addresses[0];
      }
      return this.user.cid ? this.user.cid : "Адрес сброшен";
    },
    expire() {
      return formatDate(this.user.finance.expireDate);
    },
  },
  async created() {
    await this.fetchUserDetails();
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
