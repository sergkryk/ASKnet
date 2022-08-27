<template>
  <root-section title="Новости" :mods="['news']">
    <ul>
      <news-card
        v-for="item in news"
        :id="item.id"
        :key="item.id"
        :title="item.title"
        :img="item.img"
        :date="item.date"
        :category="item.category"
      ></news-card>
    </ul>
  </root-section>
</template>

<script>
import news from '@/config/news.js'
import NewsCard from "@/components/news/NewsCard.vue"
export default {
  components: {
    NewsCard,
  },
  computed: {
    news() {
      return news;
    }
  }
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
  
  & > li {
    min-width: 300px;
    max-width: 350px;
    scroll-snap-align: center;

    &:not(:last-child) {
      margin-right: clamp(1rem, 4vw, 3rem);
    }
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
