<template>
  <ul class="bar">
    <li class="bar__item" v-for="item of items" :key="item.title">
      <p class="bar__title">{{ item.title }}</p>
      <div class="bar__svg-wrapper" :data-style="item.icon">
        <svg viewBox="0 0 24 24">
          <use :xlink:href="('#'+item.icon)"></use>
        </svg>
      </div>
      <p class="bar__content">{{ item.data }}</p>
      <button class="bar__button site-button site-button--small">{{ item.button }}</button>
    </li>
  </ul>
</template>

<script>
import { statusBarItems } from '../config'

export default {
  data() {
    return {
      items: statusBarItems,
    }
  }
};
</script>

<style lang="scss">
  .bar {
    width: 100%;
    margin: 0;
    padding: 0;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 1rem;

    list-style: none;
  }
  .bar__item {
    --padding: 1.5rem;
    --svg-size: 3rem;

    position: relative;
    padding: var(--padding);

    border-radius: var(--border-radius);
    box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
      rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  }
  .bar__svg-wrapper {
    position: absolute;
    top: calc(var(--padding)/2);
    right: calc(var(--padding)/2);

    width: var(--svg-size);
    height: var(--svg-size);

    color: var(--color-lightblue);

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 100%;
      height: 100%;
    }

    &[data-style="statusok"] {
      color: var(--color-green);
    }
    &[data-style="user"] {
      color: var(--color-yellow);
    }
    &[data-style="password"] {
      color: var(--color-red);
    }
    &[data-style="macaddress"] {
      color: var(--font-color-light);
    }
    &[data-style="calendar"] {
      color: var(--color-violet);
    }
  }
  .bar__title {
    margin: 0 0 1rem;

    color: var(--font-color-light);
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 500;
  }
  .bar__content {
    margin: 0 0 1.5rem;

    color: var(--font-color);
    font-size: 2rem;
    font-weight: 400;

    text-overflow: ellipsis;
  }
  .bar__details {
    margin: 0;
  }
</style>
