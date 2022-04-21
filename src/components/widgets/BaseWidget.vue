<template>
  <li class="bar__item" v-if="content">
    <p class="bar__title">{{ title }}</p>
    <div class="bar__svg-wrapper" :data-style="icon">
      <svg viewBox="0 0 24 24">
        <use :xlink:href="'#' + icon"></use>
      </svg>
    </div>
    <p class="bar__content">{{ content }}</p>
    <button @click="clickHandler" class="bar__button site-button site-button--small">
      {{ buttonTitle }}
    </button>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    buttonTitle: {
      type: String,
      required: true,
    },
    clickHandler: {
      type: Function,
      required: true,
    }
  }
};
</script>

<style lang="scss">
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

    &[data-style="enabled"] {
      color: var(--color-green);
    }
    &[data-style="disabled"] {
      color: var(--color-lightred);
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
