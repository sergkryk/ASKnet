<template>
  <section class="post">
    <div class="post__container container">
      <div class="post__img">
        <base-image :name="currentPost.img" path="news"></base-image>
      </div>
      <div class="post__content">
        <h1 class="post__title">
          {{ currentPost.title }}
        </h1>
        <component :is="comp"></component>
        <div class="post__details">
          <div class="post__details-item">
            <svg>
              <use xlink:href="#calendar"></use>
            </svg>
            <span>{{ currentPost.date }}</span>
          </div>
          <div class="post__details-item post__details-item--purple">
            <svg>
              <use xlink:href="#hashtag"></use>
            </svg>
            <span class="post__cat">Категория: {{ currentPost.category }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import news from "@/config/news.js";
import { defineAsyncComponent } from "vue";

export default {
  computed: {
    currentPost() {
      const [post] = news.filter((el) => el.id === this.$route.params.id);
      return post;
    },
    comp() {
      return defineAsyncComponent(() =>
        import(`@/components/news/posts/${this.currentPost.component}.vue`)
      );
    },
  },
};
</script>

<style lang="scss">
.post {
  --gap: clamp(
    0.75rem,
    1.5vw + 0.375rem,
    1.5rem
  ); // from 12px to 24px & from 400px to 1200px
}
.post__container {
  padding-bottom: var(--gap);

  background-color: var(--color-white);

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-gap: 2rem;
  }
}
.post__img {
  position: relative;
  padding: clamp(
    1rem,
    2vw + 0.5rem,
    2rem
  ); //from 16px to 32px & from 400px to 1200px

  display: flex;
  justify-content: center;
  align-items: center;

  picture {
    z-index: 10;
    img {
      width: 100%;
      max-width: 400px;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }
  &::after {
    @media (min-width: 1024px) {
      content: "";
      position: absolute;
      width: 50%;
      height: 100%;

      left: 0;
      top: 0;

      background-color: var(--site-blue);
      opacity: 0.1;
      border-top-right-radius: 3rem;
      border-bottom-right-radius: 3rem;
    }
  }
}
.post__content {
  @media (min-width: 1024px) {
    padding-top: 1rem;
  }
}
.post__title {
  --font-size: clamp(
    1.5rem,
    4vw + 0.5rem,
    3.5rem
  ); // from 24px to 56 px & 400px to 1200px
  position: relative;

  margin: 0;
  padding-bottom: var(--gap);
  font-size: var(--font-size);
  line-height: calc(var(--font-size) * 1.25);
  font-weight: 400;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;

    left: 0;
    bottom: 0;

    background-image: linear-gradient(
      90deg,
      rgba(76, 175, 80, 1) 25%,
      rgba(255, 255, 255, 1) 100%
    );
  }
  &::first-letter {
    color: var(--site-blue);
  }
}

.post__details {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media (min-width: 1024px) {
    margin-top: auto;
  }
}

.post__details-item {
  padding: clamp(0.125rem, 0.5vw + 0rem, 0.375rem)
    clamp(0.375rem, 0.5vw + 0.25rem, 0.625rem);
  background-color: var(--site-yellow);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-white);
  font-size: clamp(
    0.75rem,
    0.5vw + 0.625rem,
    1rem
  ); //from 12px(400px) to 16px(1200px)
  line-height: 1.2rem;
  font-weight: 500;

  svg {
    margin-right: 10px;
    width: 1.2rem;
    height: 1.2rem;
  }

  &--purple {
    background-color: var(--color-violet);
  }
}

.post__body {
  padding: var(--gap) 0;

  h2 {
    margin: 0 0 var(--gap);
    font-weight: 600;
  }

  ul {
    padding: 0;
    margin: 0 0 var(--gap);

    font-size: clamp(1rem, 0.5vw + 0.875rem, 1.25rem);
    line-height: calc(clamp(1rem, 0.5vw + 0.875rem, 1.25rem) * 1.25);
    list-style: none;

    li {
      margin-bottom: calc(var(--gap) * 0.5);

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  p {
    margin: 0 0 var(--gap);
    font-size: clamp(1rem, 0.5vw + 0.875rem, 1.25rem);
    line-height: calc(clamp(1rem, 0.5vw + 0.875rem, 1.25rem) * 1.25);

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: var(--site-blue);
    transition: color var(--default-transition);

    font-size: clamp(1rem, 0.5vw + 0.875rem, 1.25rem);
    line-height: calc(clamp(1rem, 0.5vw + 0.875rem, 1.25rem) * 1.25);

    &:hover {
      color: var(--color-lightblue-transparent);
    }
  }
  
  table {
    margin-bottom: var(--gap);
    border-collapse: collapse;
    text-align: left;
  }
}
</style>
