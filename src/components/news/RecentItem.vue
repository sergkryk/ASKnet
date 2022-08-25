<template>
  <li>
    <img :src="imgSrc" :alt="title" />
    <router-link to="#">{{ title }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return require(`@/assets/img/news/${this.img}`);
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  overflow: hidden;

  box-shadow: var(--card-shadow);
}
img {
  width: 100%;
  aspect-ratio: 3 / 1;
  object-fit: cover;
}
a {
  --fsize: clamp(1rem, 0.5vw + 0.875rem, 1.25rem);
  display: block;
  padding: calc(var(--fsize) * 0.75);
  font-size: var(--fsize);
  line-height: calc(var(--fsize) * 1.1);
  font-weight: 500;
  transition: color var(--default-transition);

  &:hover {
    color: var(--site-blue);
  }
}
</style>
