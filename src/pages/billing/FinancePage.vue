<template>
  <section>
    <div class="container">
      <h1 class="main-heading">{{ title }}</h1>
      <finance-filter
        @typeChange="handleTypeChange"
        @dateChange="handleDatesChange"
        :initialDates="timePeriod"
      ></finance-filter>
      <finance-table
        :operations="finalResult"
        v-if="finalResult.length > 0"
      ></finance-table>
    </div>
  </section>
</template>

<script>
import Dates from "@/utils/dates.js";
import Api from "@/utils/network.js";
import { PAYS_URL, FEES_URL } from "@/config/config.js";

import FinanceTable from "@/components/finance/FinanceTable.vue";
import FinanceFilter from "@/components/finance/FinanceFilter.vue";
import { checkAuthorization } from "@/utils/cookies.js";

export default {
  components: {
    FinanceFilter,
    FinanceTable,
  },

  data() {
    return {
      title: "Финансовые операции",
      type: "all",
      pays: [],
      fees: [],
      timePeriod: {
        begin: "",
        end: "",
      },
    };
  },
  computed: {
    filteredByType() {
      switch (this.type) {
        case "fee":
          return this.fees;
        case "payment":
          return this.pays;
        default:
          return [...this.pays, ...this.fees];
      }
    },
    finalResult() {
      const sorted = this.filteredByType.slice().sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      });
      return sorted;
    },
  },
  methods: {
    setType(arr, type) {
      arr.forEach((el) => (el.type = type));
    },
    setPeriod() {
      const { startDate, endDate } = Dates.getDefaulDatesPeriod();
      this.timePeriod.begin = startDate;
      this.timePeriod.end = endDate;
    },
    async fetchData() {
      const pays = await Api.post(
        PAYS_URL,
        this.timePeriod
      );
      const fees = await Api.post(
        FEES_URL,
        this.timePeriod
      );
      this.setType(pays, "payment");
      this.setType(fees, "fee");

      this.pays = pays;
      this.fees = fees;
    },
    async handleDatesChange(data) {
      if (isNaN(data.value) || typeof data.value !== "number") {
        return;
      }
      this.timePeriod[data.name] = data.value;
      await this.fetchData();
    },
    handleTypeChange(value) {
      this.type = value;
    },
  },
  beforeCreate() {
    if (!checkAuthorization()) {
      this.$router.push("/login");
    }
  },
  async beforeMount() {
    await this.setPeriod();
    await this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 1.2rem 0;
}
h1 {
  margin-bottom: calc(clamp(1.625rem, 0.75vw + 1.4375rem, 2rem) * 0.5);
}
</style>
