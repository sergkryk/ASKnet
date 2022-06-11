<template>
  <section>
    <div class="container">
      <h1>{{ title }}</h1>
      <finance-filter></finance-filter>
    </div>
  </section>
</template>

<script>
import FinanceFilter from '@/components/finance/FinanceFilter.vue';

export default {
  components: {
    FinanceFilter,
  },

  data() {
    return {
      title: "Финансовый отчёт пользователя",
      startDate: "",
      endDate: "",
    };
  },
  computed: {
    authHeader() {
      return this.$store.getters.authHeader;
    },
  },
  methods: {
    async fetchStatsByDate() {
      if (!this.authHeader) {
        this.$router.push("billing");
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
