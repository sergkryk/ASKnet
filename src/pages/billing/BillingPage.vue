<template>
  <section class="user container" v-if="user">
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
  </section>
</template>

<script>
import PasswordCard from "@/components/billing/PasswordCard.vue";
import CidCard from "@/components/billing/CidCard.vue";
import UserPersonal from "@/components/billing/UserPersonal.vue";
import UserFinances from "@/components/billing/UserFinances.vue";
import { formatDate } from "@/utils/utils";
import PaymentButton from "@/components/ui/PaymentButton.vue";
import { checkAuthorization } from "@/utils/cookies.js";

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
      await this.$store.dispatch("user/setUser");
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
    if (!checkAuthorization()) {
      this.$router.push("/login");
    } else {
      await this.fetchUserDetails();
    }
  },
};
</script>

<style lang="scss">
.user {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.user__title {
  margin: 0 0 2rem;
}
.user__content {
  color: var(--font-color);
  margin-bottom: 2rem;

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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 1rem;

  button {
    width: 100%;
    max-width: 400px;
  }
}
.bar {
  width: 100%;
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 1rem;

  list-style: none;
}
</style>
