<template>
  <section class="post">
    <div class="post__container container">
      <div class="post__img">
        <img :src="image" :alt="post.title" />
      </div>
      <div class="post__content">
        <h1 class="post__title">
          {{ post.title }}
        </h1>
        <div class="post__body">
          <template v-for="el in post.content" :key="el.key">
            <component :is="el.tag">
              {{ el.body }}
            </component>
          </template>
        </div>
        <div class="post__details">
          <div class="post__details-item">
            <svg>
              <use xlink:href="#calendar"></use>
            </svg>
            <span>{{ post.date }}</span>
          </div>
          <div class="post__details-item post__details-item--purple">
            <svg>
              <use xlink:href="#hashtag"></use>
            </svg>
            <span class="post__cat">Категория: {{ post.category }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // props: {
  //   title: {
  //     type: String,
  //     required: true,
  //   },
  //   img: {
  //     type: String,
  //     required: true,
  //   },
  //   content: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  data() {
    return {
      post: {
        title:
          "Важные изменения в тарифных планах для абонентов частного сектора",
        img: "post-2-420x368@2x.jpg",
        date: "15 августа 2022 года",
        category: "финансы",
        content: [
          {
            tag: "p",
            body: "Уважаемы абоненты. Обращаем ваше внимание на то, что с 01 сентября 2022 года тарифные планы Базовый, Стандартный и Простой станут недоступны для абонентов проживающих в частном секторе.",
          },
          {
            tag: "p",
            body: "Абоненты использующие тарифный план 'Базовый' или 'Стандартный' будут автоматически переведены на тарифный план 'Стандартный Плюс'. Абоненты с тарифным планом 'Простой' будут автоматически переведены на тарифный план 'Простой плюс'",
          },
          {
            tag: "p",
            body: "Данные изменения связаны с подоражанием оплаты за подвеску кабеля на электрических опорах ЛЭП что привело к невозможности предоставлять услугу в частный сектор по цене данных тарифных планов",
          },
        ],
      },
    };
  },
  computed: {
    image() {
      return require(`@/assets/img/news/${this.post.img}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  --gap: 1.5rem;
  min-height: 100vh;
}
.post__container {
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 2rem;
  min-height: 100%;

  background-color: var(--color-white);
}
.post__img {
  position: relative;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    max-width: 350px;
    max-height: 350px;
    object-fit: cover;

    border-radius: 0.5rem;
  }

  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;

    left: 0;
    top: var(--gap);

    background-color: var(--site-blue);
    opacity: 0.1;
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
  }
}
.post__content {
  padding-top: 1rem;
}
.post__title {
  position: relative;

  margin: 0;
  padding-bottom: var(--gap);
  font-size: 3.5rem;
  line-height: 3.6rem;
  font-weight: 400;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;

    left: 0;
    bottom: 0;

    // background-color: var(--site-green);
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

.post__body {
  padding: var(--gap) 0;
  p {
    margin: 0 0 var(--gap);

    &:last-child {
      margin-bottom: 0;
    }
  }
}
.post__details {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.post__details-item {
  padding: 5px 10px;
  background-color: var(--site-yellow);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-white);
  font-size: 1rem;
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
</style>
