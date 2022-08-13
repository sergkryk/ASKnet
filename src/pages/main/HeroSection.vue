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
          Скоростной доступ к&nbsp;сети Интернет и&nbsp;более 200 телевизионных
          каналов в одном кабеле.
        </h2>
        <p class="hero__text">
          Наша компания занимается предоставлением услуг доступа в&nbsp;сеть
          Интернет и&nbsp;просмотра цифрового телевидения используя передовые
          технологии GEPON и&nbsp;FTTH (волоконно-оптическая линия
          к&nbsp;каждому абоненту).
        </p>
        <base-link to="login" label="Личный кабинет" ariaLabel="Переход в личный кабинет" icon="enter" :mods="['hero__enter']"></base-link>
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
}

.hero__title {
  --fsize: clamp(2rem, 6vw + 0.5rem, 5rem);
  margin: 0 0 1rem 0;
  padding: 0;

  font-weight: 700;
  font-size: var(--fsize);
  line-height: calc(var(--fsize) * 1.25);
  text-align: center;
  color: var(--color-white);
}

.hero__subtitle {
  --fsize: clamp(1.25rem, 2.5vw + 0.625rem, 2.5rem);
  margin: 0 0 1rem 0;
  padding: 0;

  font-weight: 700;
  font-size: var(--fsize);
  line-height: calc(var(--fsize) * 1.25);
  text-align: center;
  color: var(--color-white);
}

.hero__text {
  --fsize: clamp(1.25rem, 1vw + 1rem, 1.75rem);
  display: none;
  margin: 0 0 1rem 0;
  padding: 0;

  font-weight: 500;
  font-size: var(--fsize);
  line-height: calc(var(--fsize) * 1.25);
  text-align: center;
  color: var(--color-white);

  @media (min-width: 768px) {
    display: block;
  }
}

.hero__enter {
  margin: 4rem auto 0;
}
</style>