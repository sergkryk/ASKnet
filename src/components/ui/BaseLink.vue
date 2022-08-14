<template>
  <a
    v-if="isExternal"
    :href="to"
    target="_blank"
    rel="noopener"
    :class="mods"
    :aria-label="ariaLabel"
  >
    <span>{{ label }}</span>
    <svg v-if="icon" aria-label="Иконка">
      <use :xlink:href="`#${icon}`"></use>
    </svg>
  </a>
  <router-link v-else :to="to" :class="mods" :aria-label="ariaLabel">
    <span>{{ label }}</span>
    <svg v-if="icon" aria-label="Иконка">
      <use :xlink:href="`#${icon}`"></use>
    </svg>
  </router-link>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    ...RouterLink.props,
    label: {
      type: String,
      required: false,
      default: "",
    },
    icon: {
      type: String,
      required: false,
    },
    ariaLabel: {
      type: String,
      required: false,
      default: "Переход по ссылке",
    },
    mods: {
      type: Array,
      required: false,
    },
  },
  computed: {
    isExternal() {
      return typeof this.to === "string" && this.to.startsWith("http");
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  min-height: 3rem;
  max-width: 320px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  color: var(--color-white);
  font-weight: 700;

  background-color: var(--site-yellow);
  border-radius: 0.5rem;
  box-shadow: rgba(255, 193, 7, 0.24) 0px 8px 16px 0px;

  transition: transform var(--default-transition),
    box-shadow var(--default-transition);

  &.green {
    background-color: var(--site-green);
    box-shadow: rgba(0, 171, 85, 0.24) 0px 8px 16px 0px;
  }
  &.red {
    background-color: var(--site-red);
    box-shadow: rgba(255, 72, 66, 0.24) 0px 8px 16px 0px;
  }

  &:hover {
    box-shadow: none;
    transform: scale(1.02);
  }
}
svg {
  margin-left: 1rem;

  width: 1.2rem;
  height: 1.2rem;
}
</style>
