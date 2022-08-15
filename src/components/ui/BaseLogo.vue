<template>
  <router-link to="/" :class="className">
    <img src="@/assets/img/svg/logo.svg" width="150" />
  </router-link>
</template>

<script>
export default {
  props: {
    mods: {
      type: Array,
      required: false,
    },
    className: {
      type: Array,
      required: false,
    }
  },
};
</script>

<style lang="scss" scoped>
a {
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-content: center;
}
img {
  width: 100%;
  object-fit: contain;
}
.router-link-exact-active {
  cursor: pointer;
  pointer-events: none;
}
</style>
