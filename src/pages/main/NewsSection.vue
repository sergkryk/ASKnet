<template>
  <root-section title="Новости" :mods="['news']">
    <ul>
      <news-card v-for="item in news" :key="item.title" :title="item.title" :img="item.img" :date="item.date" :category="item.category"></news-card>
    </ul>
  </root-section>
</template>

<script>
import NewsCard from "@/components/news/NewsCard.vue"
  export default {
    components: {
      NewsCard,
    },
    data() {
      return {
        news: [
          {
            title: "Изменения в тарифах для частного сектора8",
            img: "post-1-420x368@2x.jpg",
            date: "15 августа 2022 года",
            category: "финансы",
          },
          {
            title: "Изменения в тарифах для частного сектора7",
            img: "post-2-420x368@2x.jpg",
            date: "15 августа 2022 года",
            category: "финансы",
          },
          {
            title: "Изменения в тарифах для частного сектора6",
            img: "post-3-420x368@2x.jpg",
            date: "15 августа 2022 года",
            category: "финансы",
          },
          {
            title: "Изменения в тарифах для частного сектора5",
            img: "post-4-420x368@2x.jpg",
            date: "15 августа 2022 года",
            category: "финансы",
          },
          {
            title: "Изменения в тарифах для частного сектора4",
            img: "post-3-420x368@2x.jpg",
            date: "15 августа 2022 года",
            category: "финансы",
          },
          {
            title: "Изменения в тарифах для частного сектора3",
            img: "post-2-420x368@2x.jpg",
            date: "15 августа 2022 года",
            category: "финансы",
          },
          {
            title: "Изменения в тарифах для частного сектора2",
            img: "post-1-420x368@2x.jpg",
            date: "15 августа 2022 года",
            category: "финансы",
          },
          {
            title: "Изменения в тарифах для частного сектора1",
            img: "post-4-420x368@2x.jpg",
            date: "15 августа 2022 года",
            category: "финансы",
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
</style>