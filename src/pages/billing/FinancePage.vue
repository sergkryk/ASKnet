<template>
  <section>
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<script>
import Dates from "@/utils/dates.js";
import { PAYS_URL } from "@/config/config.js";

export default {
  components: {},

  data() {
    return {
      title: "Финансовая статистика пользователя",
      pays: [],
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
  },
  methods: {
    setPeriod() {
      const { startDate, endDate } = Dates.getDefaulDatesPeriod();
      this.timePeriod.begin = startDate;
      this.timePeriod.end = endDate;
    },
    async fetchPays() {
      if (!this.authHeader) {
        this.$router.push("billing");
        return;
      }
      const response = await fetch(PAYS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.authHeader.Authorization,
        },
        body: JSON.stringify(this.timePeriod),
      });
      const data = await response.json();
      this.pays = data;
    },
  },
  async beforeMount() {
    await this.setPeriod();
    await this.fetchPays();
  },
};
</script>

<style lang="scss" scoped></style>
