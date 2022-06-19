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
        el.date = new Date(el.date).getTime();
        el.type = "payment";
        payments.push(el);
      });
      return payments;
    },
    fees() {
      const fees = [];
      mockFees.forEach((el) => {
        el.date = new Date(el.date).getTime();
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
          if (new Date(item.date).getTime() >= dateStart) {
            acc.push(item);
          }
          return acc;
        }, [])
      }
      if (dateEnd) {
        operations = operations.reduce((acc, item) => {
          if (new Date(item.date).getTime() <= dateEnd) {
            acc.push(item);
          }
          return acc;
        }, [])
      }
      if (type.length > 0) {
        operations = operations.reduce((acc, item) => {
          type.forEach((el) => {
            if (item.type === el) {
              acc.push(item);
            }
          })
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
    },
  }
};
</script>

<style lang="scss" scoped></style>
