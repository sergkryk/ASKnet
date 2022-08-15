<template>
  <li class="news-card">
    <div class="news-card__image">
      <img :src="imageSource" :alt="title" />
      <div class="news-card__decor">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 0 0 321.39 29.09Z"
            class="shape-fill"
          />
        </svg>
      </div>
    </div>
    <div class="news-card__content">
      <span class="news-card__date">{{ date }}</span>
      <h3 class="news-card__title">{{ title }}</h3>
      <div class="news-card__cat">
        <svg viewBox="0 0 24 24">
          <use xlink:href="#hashtag"></use>
        </svg>
        <span>{{ category }}</span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false,
      default: "новости",
    },
  },
  computed: {
    imageSource() {
      return require(`@/assets/img/news/${this.img}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.news-card {
  display: flex;
  flex-flow: column nowrap;
  border-radius: 0.5rem;
  overflow: hidden;

  background-color: var(--color-white);

  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
}
.news-card__image {
  position: relative;
  min-height: 60%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.news-card__content {
  position: relative;
  padding: 1.5rem;
  min-height: 40%;
}

.news-card__decor {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.news-card__decor svg {
  position: relative;
  display: block;
  width: 100%;
  transform: rotateX(180deg);
}

.news-card__decor .shape-fill {
  fill: #ffffff;
}
.news-card__date {
  --size: 1rem;
  display: block;
  margin-bottom: var(--size);
  font-size: var(--size);
  line-height: calc(var(--size) * 1.25);

  color: var(--font-color-light);
}
.news-card__title {
  --size: 1.625rem;
  margin: 0 0 var(--size);

  font-size: var(--size);
  line-height: calc(var(--size) * 1.25);
  font-weight: 500;

  transition: color var(--default-transition);

  &:hover {
    color: var(--color-lightblue);
  }
}
.news-card__cat {
  --size: 0.8rem;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 25px;
  position: absolute;
  right: 0;
  bottom: 1.5rem;

  font-size: var(--size);
  line-height: calc(var(--size) * 1.2);
  color: var(--color-white);
  text-transform: uppercase;

  background-color: var(--color-violet);

  svg {
    position: absolute;
    top: calc(50% - (var(--size) / 2));
    left: 5px;
    margin-right: 5px;
    width: var(--size);
    height: var(--size);
  }
}
</style>
