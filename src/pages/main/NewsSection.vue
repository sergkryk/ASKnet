<template>
  <root-section title="Новости" :mods="['news']">
    <ul>
      <news-card
        v-for="item in news"
        :key="item.title"
        :title="item.title"
        :img="item.img"
        :date="item.date"
        :category="item.category"
      ></news-card>
    </ul>
  </root-section>
</template>

<script>
import NewsCard from "@/components/news/NewsCard.vue";
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  --gap: clamp(1rem, 4vw, 3rem);
  width: 100vw;

  margin: 0;
  padding: 0 var(--gap) 0 var(--gap);
  margin-left: calc(var(--gap) * -1);
  padding-bottom: clamp(1.25rem, 1.25vw + 0.9375rem, 1.875rem);
  // padding-left: clamp(1rem, 4vw, 3rem);
  // padding-right: clamp(1rem, 4vw, 3rem);

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;

  overflow-x: auto;
  list-style: none;

  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-color: transparent transparent;
  scrollbar-width: 0px;
  -ms-overflow-style: none;

  & > li {
    min-width: 300px;
    max-width: 350px;
    scroll-snap-align: center;

    &:not(:last-child) {
      margin-right: clamp(1rem, 4vw, 3rem);
    }
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border: none;
  }

  @media (min-width: 1024px) {
    width: 100%;

    margin: 0;
    padding: 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;

    & > li {
      min-width: initial;
      max-width: initial;

      &:not(:last-child) {
        margin-right: 0;
      }

      &:first-child {
        grid-column: span 2;
      }
    }
  }
}
</style>
