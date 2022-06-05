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
      <h2 class="subtitle">История подключений</h2>
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
        <template #tbody>
          <tr v-for="item in mockActivity" :key="item.sent + item.recv">
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
export default {
  data() {
    return {
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
    };
  },
};
</script>
