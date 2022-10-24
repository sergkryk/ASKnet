<template>
  <picture>
    <source type="image/webp" :srcset="imgWebp" />
    <img
      :src="imgJpeg"
    />
  </picture>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  computed: {
    imgJpeg() {
      return require(`@/assets/img/${this.path}/${this.name}.jpg`);
    },
    imgWebp() {
      return require(`@/assets/img/${this.path}/${this.name}.webp`);
    },
  },
};
</script>
