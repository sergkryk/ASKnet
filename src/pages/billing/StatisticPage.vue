<template>
  <section>
    <div class="container">
      <h1 class="main-heading">Статистика использования сети</h1>
      <stats-filter
        @dateChange="handleDatesInput"
        :initialDates="period"
        :error="datesError"
      ></stats-filter>
      <base-table :mods="['base-table--stats']">
        <template #theader>
          <tr>
            <th>Начало</th>
            <th>Окончание</th>
            <th>Длительность</th>
            <th>Получено</th>
            <th>Отправлено</th>
          </tr>
        </template>
        <template #tbody v-if="toRender">
          <tr v-for="item in toRender" :key="item.start">
            <td>{{ item.start }}</td>
            <td>{{ item.end }}</td>
            <td>{{ item.duration }}</td>
            <td>{{ item.recv }}</td>
            <td>{{ item.sent }}</td>
          </tr>
        </template>
      </base-table>
    </div>
  </section>
</template>

<script>
import Dates from "@/utils/dates.js";
import Api from "@/utils/network.js";
import Formats from "@/utils/formats.js";

import { STATS_URL } from "@/config/config.js";

import StatsFilter from "@/components/stats/StatsFilter.vue";

export default {
  components: { StatsFilter },
  data() {
    return {
      period: {
        begin: null,
        end: null,
      },
      datesError: "",
      stats: [],
    };
  },
  computed: {
    toRender() {
      const formatted = this.stats.map((el) => {
        el.start = Formats.datetime(el.start);
        el.end = Formats.datetime(el.end);
        el.duration = Formats.duration(el.duration);
        el.recv = Formats.traffic(el.recv);
        el.sent = Formats.traffic(el.sent);
        return el;
      });
      return formatted;
    },
  },
  methods: {
    setPeriod() {
      const { startDate, endDate } = Dates.getDefaulDatesPeriod();
      this.period.begin = startDate;
      this.period.end = endDate;
    },
    validateDates() {
      const now = new Date().getTime();
      if (this.period.begin === this.period.end) {
        this.period.end = this.period.end + 86399 * 1000;
      }
      if (this.period.begin > this.period.end) {
        throw new Error("Начальная дата не должна быть позднее конечной");
      }
      if (this.period.begin > now || this.period.end > now) {
        throw new Error("Это архив, нельзя выбирать даты из будущего!");
      }
    },
    async fetchData() {
      const stats = await Api.post(STATS_URL, this.period);
      this.stats = stats;
    },
    async handleDatesInput(data) {
      try {
        this.period[data.name] = data.value;
        this.validateDates();
        this.datesError = "";
        await this.fetchData();
      } catch (error) {
        this.stats.length = 0;
        this.datesError = error.message;
      }
    },
  },
  async created() {
    this.setPeriod();
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
