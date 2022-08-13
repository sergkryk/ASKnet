<template>
  <a v-if="isExternal" :href="to" target="_blank" rel="noopener" :class="mods" :aria-label="ariaLabel">
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
      default: "Переход по ссылке"
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
  border-radius: 1.5rem;

  transition: transform var(--default-transition);

  &:hover {
    transform: scale(1.05);
  }
}
svg {
  margin-left: 1rem;

  width: 1.2rem;
  height: 1.2rem;
}
</style>
