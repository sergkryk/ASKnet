<template>
  <form class="filter">
    <div class="filter__container" v-for="input in inputs" :key="input.name">
      <h2 class="filter__inputs-heading" v-if="input.heading">
        {{ input.heading }}
      </h2>
      <div class="filter__inputs" :class="mods(input.mods)">
        <slot :name="input.name"></slot>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  // inputs - массив объектов с ключами name, heading, mods для имени слота, текста заголовка и слов модификаторов для динамической генерации стилей (см. mods)
  props: {
    inputs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    mods(mods) {
      return mods.map((el) => `filter__inputs--${el}`);
    },
  },
};
</script>

<style lang="scss">
.filter {
  --font-size: clamp(
    1.125rem,
    0.5vw + 1rem,
    1.375rem
  ); //min 18px/400 max 22px/1200
}

.filter__container {
  margin-bottom: calc(var(--font-size) * 0.75);
}

.filter__inputs-heading {
  margin: 0 0 calc(var(--font-size) * 0.75);
  font-weight: 500;
  font-size: var(--font-size);
  line-height: calc(var(--font-size) * 1.25);
}

.filter__inputs {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: calc(var(--font-size) * 0.75);

  &--radios {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;

    & > div:not(:first-child) {
      margin-left: calc(var(--font-size) * 0.5);
    }
  }
}
</style>
