<template>
  <div class="recent container">
    <h2>Последние новости</h2>
    <ul class="recent__list">
      <recent-item
        v-for="el in mocks"
        :key="el.title"
        :title="el.title"
        :img="el.img"
      ></recent-item>
    </ul>
  </div>
</template>

<script>
import RecentItem from "@/components/news/RecentItem.vue";

export default {
  components: {
    RecentItem,
  },
  data() {
    return {
      mocks: [
        {
          title: "Изменения в тарифах для частного сектора8",
          img: "post-1-420x368@2x.jpg",
        },
        {
          title: "Изменения в тарифах для частного сектора8",
          img: "post-2-420x368@2x.jpg",
        },
        {
          title: "Изменения в тарифах для частного сектора8",
          img: "post-3-420x368@2x.jpg",
        },
        {
          title: "Изменения в тарифах для частного сектора8",
          img: "post-4-420x368@2x.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.recent {
  --gap: clamp(0.75rem, 1.5vw + 0.375rem, 1.5rem);
  padding-top: clamp(1rem, 4vw, 3rem);
  padding-bottom: clamp(1rem, 4vw, 3rem);
}
h2 {
  --font-size: clamp(1.25rem, 1.5vw + 0.875rem, 2rem);
  margin: 0 0 var(--gap);
  
  font-size: var(--font-size);
  line-height: calc(var(--font-size) * 1.25);
  text-align: left;
  font-weight: 500;
}
ul {
  margin: 0;
  padding: 0 0 1rem 0;

  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-gap: 1rem;

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
    scroll-snap-align: center;
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
