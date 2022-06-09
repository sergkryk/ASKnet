<template>
  <section>
    <div class="container">
      <h2 class="subtitle">Текущее подключение</h2>
        <!-- <form>
          <div class="wrapper">
            <label for="startdate">Начало</label>
            <input type="date" name="startdate" id="startdate">
          </div>
          <div class="wrapper">
            <label for="enddate">Начало</label>
            <input type="date" name="enddate" id="enddate">
          </div>
        </form> -->
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
      <h2 class="subtitle">Журнал подключений</h2>
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
        <template #tbody v-if="stats">
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
import { STATS_URL } from '@/config/config.js';
import debounce from 'lodash.debounce';

export default {
  data() {
    return {
      stats: '',
      mockCurrent: {
        duration: 19752,
        ip: '10.100.0.1',
        cid: '7c:8b:ca:86:90:6b',
        recv: 58784128,
        sent: 30663,
      },
      mockActivity: [
        {
          start: "2022-05-27 10:36:02",
          end: "2022-05-27 10:36:02",
          duration: 19752,
          sent: 30663,
          recv: 58784128,
        },
        {
          start: "2022-05-27 10:36:02",
          end: "2022-05-27 10:36:02",
          duration: 19752,
          sent: 30663,
          recv: 58784128,
        },
        {
          start: "2022-05-27 10:36:02",
          end: "2022-05-27 10:36:02",
          duration: 19752,
          sent: 30663,
          recv: 58784128,
        },
        {
          start: "2022-05-27 10:36:02",
          end: "2022-05-27 10:36:02",
          duration: 19752,
          sent: 30663,
          recv: 58784128,
        },
        {
          start: "2022-05-27 10:36:02",
          end: "2022-05-27 10:36:02",
          duration: 19752,
          sent: 30663,
          recv: 58784128,
        },
        {
          start: "2022-05-27 10:36:02",
          end: "2022-05-27 10:36:02",
          duration: 19752,
          sent: 30663,
          recv: 58784128,
        },
        {
          start: "2022-05-27 10:36:02",
          end: "2022-05-27 10:36:02",
          duration: 19752,
          sent: 30663,
          recv: 58784128,
        },
        {
          start: "2022-05-27 10:36:02",
          end: "2022-05-27 10:36:02",
          duration: 19752,
          sent: 30663,
          recv: 58784128,
        },
        {
          start: "2022-05-27 10:36:02",
          end: "2022-05-27 10:36:02",
          duration: 19752,
          sent: 30663,
          recv: 58784128,
        },
        {
          start: "2022-05-27 10:36:02",
          end: "2022-05-27 10:36:02",
          duration: 19752,
          sent: 30663,
          recv: 58784128,
        },
      ],
      quantity: 10,
    };
  },
  computed: {
    statsToLoad() {
      return this.stats.slice(0, this.quantity);
    }
  },
  methods: {
    async fetchStats() {
      const response = await fetch(STATS_URL, {
        headers: this.$store.getters.authHeader,
      })
      const data = await response.json();
      return data;
    },
    dateFormat(timestamp) {
      const dateObj = new Date(timestamp);
      const date = dateObj.toLocaleDateString('ru-RU');
      const time = dateObj.toLocaleTimeString();
      return `${date} ${time}`;
    },
    durationFormat(timestamp) {
      if (timestamp < 60) {
        return 'менее 1й минуты'
      }
      const seconds = timestamp % 60;
      const durationInMinutes = (timestamp - seconds) / 60;
      if (durationInMinutes < 60) {
        return `00:${('0' + durationInMinutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
      } 
      const minutes = durationInMinutes % 60;
      const hours = (durationInMinutes - minutes) / 60;
      return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`
    },
    trafficFormat(amoutInBytes) {
      const mbytes = (amoutInBytes / 1048576).toFixed(2);
      if (mbytes > 1024) {
        return `${(mbytes / 1024).toFixed(2)} Гбайт`;
      }
      return `${mbytes} Мбайт`
    },
    handleScroll() {
      let bottomOfPage = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      console.log(bottomOfPage);

      if (bottomOfPage) {
        this.quantity = this.quantity + 10;
      }
    },
  },
  async beforeMount() {
    this.stats = await this.fetchStats();
  },
  mounted() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 100)
    window.addEventListener('scroll', this.handleDebouncedScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleDebouncedScroll);
  }
};
</script>
