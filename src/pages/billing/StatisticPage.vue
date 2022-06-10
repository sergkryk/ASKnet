<template>
  <section>
    <div class="container">
      <h2 class="subtitle">Текущее подключение</h2>
      <base-table :mods="['base-table--blue', 'base-table--accent']">
        <template #theader>
          <tr>
            <th>Длительность</th>
            <th>Адрес IP</th>
            <th>Адрес MAC</th>
            <th>Данных получено</th>
            <th>Данных отправлено</th>
          </tr>
        </template>
        <template #tbody>
          <tr>
            <td>{{ mockCurrent.duration }}</td>
            <td>{{ mockCurrent.ip }}</td>
            <td>{{ mockCurrent.cid }}</td>
            <td>{{ mockCurrent.recv }}</td>
            <td>{{ mockCurrent.sent }}</td>
          </tr>
        </template>
      </base-table>
      <h2 class="subtitle">История</h2>
      <stats-filter @requestByDates="fetchStatsByDate"></stats-filter>
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
        <template #tbody v-if="statsToLoad">
          <tr v-for="item in statsToLoad" :key="item.sent + item.recv">
            <td>{{ dateFormat(item.start) }}</td>
            <td>{{ dateFormat(item.end) }}</td>
            <td>{{ durationFormat(item.duration) }}</td>
            <td>{{ trafficFormat(item.recv) }}</td>
            <td>{{ trafficFormat(item.sent) }}</td>
          </tr>
        </template>
      </base-table>
    </div>
  </section>
</template>

<script>
import { STATS_URL } from "@/config/config.js";
import debounce from "lodash.debounce";

import StatsFilter from "@/components/stats/StatsFilter.vue";

export default {
  components: { StatsFilter },
  data() {
    return {
      stats: "",
      mockCurrent: {
        duration: 19752,
        ip: "10.100.0.1",
        cid: "7c:8b:ca:86:90:6b",
        recv: 58784128,
        sent: 30663,
      },
      quantity: 10,
    };
  },
  computed: {
    statsToLoad() {
      if (this.stats.length > 0) {
        return this.stats.slice(0, this.quantity);
      }
      return "";
    },
  },
  methods: {
    async fetchStats() {
      const response = await fetch(STATS_URL, {
        headers: this.$store.getters.authHeader,
      });
      const data = await response.json();
      return data;
    },
    async fetchStatsByDate(period = { start: new Date(), end: new Date() }) {
      const start = period.start.getTime(); // send the value in milliseconds, time is equal 00:00:00 //
      const end = period.end.getTime() + 86399000; // by adding 8639900 I set the time to 23:59:59 to get the sessions for a single day request //
      const reqBody = {
        start,
        end,
      };
      const authHeader = this.$store.getters["authHeader"];
      const response = await fetch(STATS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader.Authorization,
        },
        body: JSON.stringify(reqBody),
      });
      const data = await response.json();
      this.stats = data;
    },
    dateFormat(timestamp) {
      const dateObj = new Date(timestamp);
      const date = dateObj.toLocaleDateString("ru-RU");
      const time = dateObj.toLocaleTimeString();
      return `${date} ${time}`;
    },
    durationFormat(timestamp) {
      if (timestamp < 60) {
        return "менее 1й минуты";
      }
      const seconds = timestamp % 60;
      const durationInMinutes = (timestamp - seconds) / 60;
      if (durationInMinutes < 60) {
        return `00:${("0" + durationInMinutes).slice(-2)}:${(
          "0" + seconds
        ).slice(-2)}`;
      }
      const minutes = durationInMinutes % 60;
      const hours = (durationInMinutes - minutes) / 60;
      return `${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}:${(
        "0" + seconds
      ).slice(-2)}`;
    },
    trafficFormat(amoutInBytes) {
      const mbytes = (amoutInBytes / 1048576).toFixed(2);
      if (mbytes > 1024) {
        return `${(mbytes / 1024).toFixed(2)} Гбайт`;
      }
      return `${mbytes} Мбайт`;
    },
    handleScroll() {
      let bottomOfPage = window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight

      if (bottomOfPage) {
        this.quantity = this.quantity + 10;
      }
    },
  },
  mounted() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 100);
    window.addEventListener("scroll", this.handleDebouncedScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleDebouncedScroll);
  },
};
</script>
