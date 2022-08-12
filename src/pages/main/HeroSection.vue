<template>
  <section class="hero">
    <div class="hero__image">
      <picture
        ><source
          media="(max-width: 1024px)"
          type="image/webp"
          srcset="
            @/assets/img/hero/hero-bg-1024@1x.webp,
            @/assets/img/hero/hero-bg-1024@2x.webp 2x
          " />
        <source
          type="image/webp"
          srcset="
            @/assets/img/hero/hero-bg-1920@1x.webp,
            @/assets/img/hero/hero-bg-1920@2x.webp 2x
          " />
        <source
          media="(max-width: 1024px)"
          srcset="
            @/assets/img/hero/hero-bg-1024@1x.jpg,
            @/assets/img/hero/hero-bg-1024@2x.jpg 2x
          " />
        <img
          src="@/assets/img/hero/hero-bg-1920@1x.jpg"
          srcset="@/assets/img/hero/hero-bg-1920@2x.jpg 2x"
          alt="Фон"
      /></picture>
    </div>
    <div class="container">
      <div class="hero__content">
        <h1 class="hero__title">Интернет-провайдер ASKnet</h1>
        <h2 class="hero__subtitle">
          Скоростной доступ к сети Интернет и более 200 телевизионных каналов в
          одном кабеле.
        </h2>
        <p class="hero__text">
          Наша компания занимается предоставлением услуг доступа в сеть Интернет
          и просмотра цифрового телевидения используя передовые технологии GEPON
          и FTTH (волоконно-оптическая линия к каждому абоненту).
        </p>
        <div class="hero__button-wrapper">
          <a
            class="hero__button button"
            href="about.html"
            aria-label="Перейти на страницу с детальным описанием"
            >узнать больше</a
          ><a
            class="hero__button button button--yellow"
            href="tel:+30991170048"
            aria-label="Позвонить в нашу компанию"
            >позвонить нам</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  // min-height: calc(var(--vh, 1vh) * 100);
  min-height: calc(100vh - 80px);
  padding-top: 80px;
}

.hero__image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;

  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: var(--hero-overlay);
  }
}

.hero__image img {
  display: block;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);

  object-fit: cover;
}

.hero__content {
  min-height: 100%;
  margin: 0 auto;
  padding: 20px;
}

.hero__title {
  margin: 0 0 1rem 0;
  padding: 0;

  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  color: var(--color-white);
}

.hero__subtitle {
  margin: 0 0 1rem 0;
  padding: 0;

  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.3rem;
  text-align: center;
  color: var(--color-white);
}

.hero__text {
  margin: 0 0 1rem 0;
  padding: 0;

  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1.2rem;
  text-align: center;
  color: var(--color-white);
}

.hero__button {
  margin: 0 auto 20px;
}

@media (min-width: 375px) {
  .hero__title {
    font-size: 2rem;
    line-height: 2.4rem;
  }

  .hero__subtitle {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }

  .hero__text {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

@media (min-width: 768px) {
  .hero__content {
    padding: 40px;
  }

  .hero__button-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .hero__title {
    font-size: 3.5rem;
    line-height: 4rem;
  }

  .hero__subtitle {
    font-size: 2rem;
    line-height: 2.4rem;
  }

  .hero__text {
    margin-bottom: 50px;

    font-size: 1.2rem;
    line-height: 1.5rem;
  }

  .hero__button {
    margin: 0;
  }

  .hero__button + .hero__button {
    margin-left: 40px;
  }
}

@media (min-width: 1024px) {
  .hero__title {
    font-size: 4rem;
    line-height: 4.5rem;
  }

  .hero__subtitle {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  .hero__text {
    margin-bottom: 50px;

    font-size: 1.5rem;
    line-height: 2rem;
  }
}

@media (min-width: 1440px) {
  .hero__title {
    font-size: 5rem;
    line-height: 5.5rem;
  }

  .hero__subtitle {
    font-size: 3rem;
    line-height: 3.5rem;
  }

  .hero__text {
    margin-bottom: 50px;

    font-size: 2rem;
    line-height: 2.5rem;
  }
}
.button {
  position: relative;

  display: block;
  width: 80%;
  max-width: 250px;
  padding: 10px 20px;
  overflow: hidden;
  overflow: hidden;

  font-weight: 500;
  text-align: center;
  color: var(--color-white);
  text-transform: uppercase;

  background-color: var(--color-green);
  border-radius: 25px;

  transition: transform 0.2s ease-in-out;

  &--yellow {
    background-color: var(--color-yellow);
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>