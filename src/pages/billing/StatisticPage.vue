<template>
  <section>
    <div class="container">
      <h2 class="subtitle">История</h2>
      <stats-filter @dateChange="handleDatesInput" :initialDates="period"></stats-filter>
      <base-table>
        <template #theader>
          <tr>
            <th>Начало</th>
            <th>Окончание</th>
            <th>Длительность</th>
            <th>Данных получено</th>
            <th>Данных отправлено</th>
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
import Req from "@/utils/network.js";
import Formats from '@/utils/formats.js';

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
      stats: [],
    };
  },
  computed: {
    authHeader() {
      return this.$store.getters.authHeader;
    },
    toRender() {
      const formatted = this.stats.map((el) => {
        el.start = Formats.datetime(el.start);
        el.end = Formats.datetime(el.end);
        el.duration = Formats.duration(el.duration);
        el.recv = Formats.traffic(el.recv);
        el.sent = Formats.traffic(el.sent);
        return el;
      })
      return formatted;
    }
  },
  methods: {
    setPeriod() {
      const { startDate, endDate } = Dates.getDefaulDatesPeriod();
      this.period.begin = startDate;
      this.period.end = endDate;
    },
    async fetchData() {
      const stats = await Req.post(
        STATS_URL,
        this.authHeader.Authorization,
        this.period
      );
      this.stats = stats;
    },
    handleDatesInput(data) {
      console.log(data);
    }
  },
  async beforeMount() {
    this.setPeriod();
    await this.fetchData();
  },
};
</script>
