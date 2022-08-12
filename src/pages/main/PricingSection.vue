<template>
  <section class="pricing">
    <div class="container">
      <h2 class="pricing__title secondary-heading">Тарифные планы</h2>
      <ul class="pricing__list">
        <pricing-item
          v-for="plan in plans"
          :key="plan.id"
          :id="plan.id"
          :title="plan.title"
          :price="plan.price"
          :speed="plan.speed"
          :content="plan.content"
          :flatsOnly="plan.flatsOnly"
          :mods="plan.mods"
          :features="features"
        ></pricing-item>
      </ul>
    </div>
  </section>
</template>

<script>
import PricingItem from "@/components/pricing/PricingItem.vue";
export default {
  components: {
    PricingItem,
  },
  data() {
    return {
      plans: [
        {
          id: 1,
          title: "Базовый",
          price: "250",
          speed: "5",
          content:
            "Тариф с минимально комфортной скоростью для просмотра страниц без видео и совершения аудиозвонков. Нет доступа к IPTV каналам.",
        },
        {
          id: 2,
          title: "Стандарт",
          price: "350",
          speed: "30",
          content:
            "Тариф для начинающих пользователей, комфортная скорость доступа в Интернет для просмотра видео или загрузки файлов небольшого размера.",
          mods: ["yellow"],
        },
        {
          id: 3,
          title: "Стандарт Плюс",
          price: "405",
          speed: "50",
          content:
            "Скоростной доступ в Интернет и возможность быстро скачать любой файл или посмотреть видео онлайн в максимальном качестве.",
          mods: ["green"],
        },
        {
          id: 4,
          title: "Простой",
          price: "350",
          speed: "30",
          content:
            "Тариф для начинающих пользователей, комфортная скорость доступа в Интернет для просмотра видео или загрузки файлов небольшого размера.",
        },
        {
          id: 5,
          title: "Простой Плюс",
          price: "400",
          speed: "50",
          content:
            "Скоростной доступ в Интернет и возможность быстро скачать любой файл или посмотреть видео онлайн в максимальном качестве.",
          mods: ["yellow"],
        },
        {
          id: 6,
          title: "Простой Турбо",
          price: "450",
          speed: "100",
          content:
            "Можно не переживать что кому-то не хватит скорости. Отличный выбор если у вас большая семья или много подключенных устройств.",
          mods: ["green"],
        },
      ],
      features: [
        {
          content: "доступен в частном секторе",
          icon: "tick",
          plans: [3, 5, 6],
        },
        {
          content: "посуточная тарификация",
          icon: "coins",
          plans: [1, 2, 3],
        },
        {
          content: "скорость",
          icon: "www",
          plans: [1, 2, 3, 4, 5, 6],
        },
        {
          content: "техническая поддержка",
          icon: "support",
          plans: [1, 2, 3, 4, 5, 6],
        },
        {
          content: "200 IPTV каналов",
          icon: "tv",
          plans: [2, 3, 4, 5, 6],
        },
        {
          content: "видео высокого качества",
          icon: "youtube",
          plans: [2, 3, 4, 5, 6],
        },
        {
          content: "быстрое скачивание файлов",
          icon: "rocket",
          mods: ["disabled"],
          plans: [3, 5, 6],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.pricing {
  padding: 20px 0 0;

  background-color: var(--pricing-bg);
}

.pricing__title {
  margin: 0 0 20px;
  text-align: center;
}

.pricing__list {
  margin: 0 auto;
  padding: 0;

  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 20px;
}
</style>