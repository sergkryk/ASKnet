<template>
  <header class="header">
    <base-logo class="header__logo"></base-logo>
    <button
      class="header__button hamburger hamburger--spin"
      type="button"
      aria-label="Открыть меню"
      aria-controls="Навигация по сайту"
    >
      <span class="hamburger__box"><span class="hamburger__inner"></span></span>
    </button>
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__item">
          <a class="header__link header__link--hover">Главная</a>
        </li>
        <li class="header__item">
          <a class="header__link header__link--hover" href="#news">Новости</a>
        </li>
        <li class="header__item">
          <a class="header__link header__link--hover" href="#pricing">Тарифы</a>
        </li>
        <li class="header__item">
          <a class="header__link header__link--hover" href="#faq">Помощь</a>
        </li>
        <li class="header__item">
          <a class="header__link header__link--hover" href="#services">О нас</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 101;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  min-height: var(--header-height);
  margin: 0 auto;
  padding: 0 16px;

  background-color: var(--color-white);
  box-shadow: 0 0 5px 0 rgba(1, 3, 4, 0.19);
}

.header__logo {
  width: clamp(9.375rem, 3.75vw + 8.4375rem, 11.25rem);
  margin-right: auto;
}

.header__button {
  display: none;
  margin: 0 0 0 auto;
}

.header__nav {
  position: fixed;
  top: var(--header-height); //высота хедера
  left: -100%;
  z-index: 10;

  flex-shrink: 0;
  width: 80%;
  height: 100vh;
  padding: 30px 20px;

  background-color: var(--header-text);

  transition: left var(--default-transition);

  &--active {
    left: 0;
  }
}

.header__list {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;

  list-style: none;
}

.header__item {
  margin-bottom: 20px;
}

.header__link {
  padding: 10px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}

@media (min-width: 1024px) {
  .header {
    padding: 0 32px;
  }

  .header__button {
    display: none;
  }

  .header__nav {
    position: static;

    flex-grow: 1;
    height: unset;
    padding: 0;

    background-color: transparent;
  }

  .header__list {
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;

    list-style: none;
  }

  .header__item {
    margin-bottom: 0;
  }

  .header__item--login {
    margin-left: auto;

    border: 1px solid var(--header-dark-text);
    border-radius: 4px;
  }

  .header__link {
    display: inline-block;
    padding: 10px;

    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: var(--header-dark-text);

    transition: all var(--default-transition);
  }

  .header__link--hover {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      height: 1px;

      background-color: var(--header-dark-text);
      transform: scaleX(0);
      transform-origin: center;
      opacity: 0;

      transition: all var(--default-transition);
    }

    &:hover {
      color: var(--header-hover-text);

      &::before {
        background-color: var(--header-stroke);
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
}
</style>
