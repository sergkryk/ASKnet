<template>
  <section class="hero">
    <div class="hero__image"></div>
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
          >
          <a
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

<style lang="scss" scoped>
  .hero {
    position: relative;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    min-height: calc(var(--vh, 1vh) * 100);
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

      background-color: rgba(#124772, $alpha: 0.8);
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
    padding: 40px;
  }

  .hero__title {
    margin: 0 0 1rem 0;
    padding: 0;

    font-weight: 700;
    font-size: 5rem;
    line-height: 5.5rem;
    text-align: center;
    color: #ffffff;
  }

  .hero__subtitle {
    margin: 0 0 1rem 0;
    padding: 0;

    font-weight: 700;
    font-size: 3rem;
    line-height: 3.5rem;
    text-align: center;
    color: #ffffff;
  }

  .hero__text {
    margin: 0 0 50px 0;
    padding: 0;

    font-weight: 500;

    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    color: #ffffff;
  }

  .hero__button + .hero__button {
    margin-left: 40px;
  }

  .hero__button-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
</style>
