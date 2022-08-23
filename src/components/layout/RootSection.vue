<template>
  <section class="section" :class="modClasses">
    <div class="container">
      <h2 v-if="title">{{ title }}</h2>
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    mods: {
      type: Array,
      required: false,
    }
  },
  computed: {
    modClasses() {
      if (this.mods?.length) {
        return this.mods.map(mod => `section--${mod}`)
      } else {
        return ''
      }
    } 
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: clamp(1.25rem, 1.25vw + 0.9375rem, 1.875rem);
  padding-bottom: clamp(1.25rem, 1.25vw + 0.9375rem, 1.875rem);
  background-color: var(--pricing-bg);

  &--news {
    padding-bottom: 0;

    @media (min-width: 1024px) {
      padding-bottom: clamp(1.25rem, 1.25vw + 0.9375rem, 1.875rem);
    }
  }
}
h2 {
  margin: 0 auto clamp(1.25rem, 1.25vw + 0.9375rem, 1.875rem);
    --fsize: clamp(1.75rem, 1vw + 1.5rem, 2.25rem); //минимальный 28px/400px максимальный 36px/1200px (размер шрифта/ширина вьюпорта)
  font-size: var(--fsize);
  line-height: calc(var(--fsize) * 1.25);
  font-weight: 500;
  color: var(--header-dark-text);
  text-align: center;
}
</style>