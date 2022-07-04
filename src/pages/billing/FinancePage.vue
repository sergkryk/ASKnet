<template>
  <section>
    <div class="container">
      <h1>{{ title }}</h1>
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
import Req from "@/utils/network.js";
import { PAYS_URL, FEES_URL } from "@/config/config.js";

import FinanceTable from "@/components/finance/FinanceTable.vue";
import FinanceFilter from "@/components/finance/FinanceFilter.vue";

export default {
  components: {
    FinanceFilter,
    FinanceTable,
  },

  data() {
    return {
      title: "Финансовые операции пользователя",
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
    authHeader() {
      return this.$store.getters.authHeader;
    },
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
      const pays = await Req.post(
        PAYS_URL,
        this.authHeader.Authorization,
        this.timePeriod
      );
      const fees = await Req.post(
        FEES_URL,
        this.authHeader.Authorization,
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
  async beforeMount() {
    await this.setPeriod();
    await this.fetchData();
  },
};
</script>

<style lang="scss" scoped></style>
