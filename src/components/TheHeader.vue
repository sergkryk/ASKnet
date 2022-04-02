<template>
  <div class="header container">
    <div class="header__logo"></div>
    <nav class="header__nav">
      <ul class="header__list">
        <li
          class="header__item"
          v-for="link in links"
          :key="link.id"
          :class="{ 'header__item--login': link.id === 'billing' }"
        >
          <router-link
            :to="link.url"
            class="header__link"
            :class="{
              'header__link--hover': link.id !== 'billing',
              'header__link--login': link.id === 'billing',
            }"
            >{{ link.title }}</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { headerLinks } from "@/config";

export default {
  data() {
    return {
      links: headerLinks,
    };
  },
};
</script>

<style lang="scss" scoped>
  .header {
    --header-height: 80px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    min-height: var(--header-height);
    margin: 0 auto;
    padding: 0 32px;
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

    &:hover {
      color: #ffffff;
      background-color: #4caf50;
    }
  }
</style>
