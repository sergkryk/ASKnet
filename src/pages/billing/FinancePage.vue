<template>
  <section>
    <div class="container">
      <h1>{{ title }}</h1>
      <finance-filter @filterChange="handleFilter"></finance-filter>
      <finance-table :operations="filtered"></finance-table>
    </div>
  </section>
</template>

<script>
import FinanceFilter from "@/components/finance/FinanceFilter.vue";
import FinanceTable from "@/components/finance/FinanceTable.vue";

import mockPayments from "@/mock/pays.json";
import mockFees from "@/mock/fees.json";

export default {
  components: {
    FinanceFilter,
    FinanceTable,
  },

  data() {
    return {
      title: "Финансовый отчёт пользователя",
      filters: {
        dateStart: '',
        dateEnd: '',
        type: '',
      }
    };
  },
  computed: {
    authHeader() {
      return this.$store.getters.authHeader;
    },
    payments() {
      const payments = [];
      mockPayments.forEach((el) => {
        el.type = "payment";
        payments.push(el);
      });
      return payments;
    },
    fees() {
      const fees = [];
      mockFees.forEach((el) => {
        el.type = "fee";
        fees.push(el);
      });
      return fees;
    },
    all() {
      return [...this.payments, ...this.fees];
    },
    filtered() {
      let operations = this.all;
      const { dateStart, dateEnd, type } = this.filters;
      if (dateStart) {
        operations = operations.reduce((acc, item) => {
          if (item.date >= dateStart) {
            acc.push(item);
          }
          return acc;
        }, [])
      }
      if (dateEnd) {
        operations = operations.reduce((acc, item) => {
          if (item.date <= dateEnd) {
            acc.push(item);
          }
          return acc;
        }, [])
      }
      if (type) {
        operations = operations.reduce((acc, item) => {
          if (item.type === this.filters.type) {
            acc.push(item);
          }
          return acc;
        }, [])
      }
      return operations;
    }
  },
  methods: {
    async fetchStatsByDate() {
      if (!this.authHeader) {
        this.$router.push("billing");
        return;
      }
    },
    handleFilter(data) {
      this.filters = data;
      console.log(this.filters);
    },
  },
};
</script>

<style lang="scss" scoped></style>
