<template>
  <div class="header__logo"></div>
  <button
    class="header__button hamburger hamburger--spin"
    type="button"
    aria-label="Открыть меню"
    aria-controls="Навигация по сайту"
  >
    <span class="hamburger__box">
      <span class="hamburger__inner"></span>
    </span>
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
      <li class="header__item header__item--login">
        <a
          class="header__link header__link--login"
          href="https://10.100.0.254:9443"
          target="blank"
          >Личный кабинет</a
        >
      </li>
    </ul>
  </nav>
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
  padding: 0 32px;

  background-color: #ffffff;
  box-shadow: 0 0 5px 0 rgba(1, 3, 4, 0.19);

  --header-height: 80px;
}

.header__logo {
  flex-shrink: 0;
  margin-right: 50px;
  padding: 15px 0;
}

.header__button {
  display: none;
  margin: 0 0 0 auto;
}

.header__nav {
  flex-grow: 1;
  height: unset;
  padding: 0;

  background-color: transparent;
}

.header__list {
  margin: 0;
  padding: 0;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  list-style: none;
}

.header__item--login {
  margin-left: auto;

  border: 1px solid #5d6678;
  border-radius: 4px;
}

.header__link {
  display: inline-block;
  padding: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #5d6678;

  transition: all 0.3s ease-in-out;
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

    background-color: #5d6678;
    transform: scaleX(0);
    transform-origin: center;
    opacity: 0;

    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: #2196f3;

    &::before {
      background-color: #4caf50;
      transform: scaleX(1);
      opacity: 1;
    }
  }
}

.header__link--login {
  position: relative;

  font-weight: 500;

  transition: all 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    background-color: #4caf50;
    transform: scaleX(0);
    transform-origin: left;

    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: #ffffff;

    &:after {
      transform: scaleX(1);
    }
  }
}
</style>