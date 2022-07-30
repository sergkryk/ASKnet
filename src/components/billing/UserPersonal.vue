<template>
  <ul class="info-grid">
    <li class="info-grid__item" v-for="el in address" :key="el.label">
      <span class="info-grid__description">{{ el.label }}</span>
      <span class="info-grid__data">{{ el.data }}</span>
    </li>
  </ul>
</template>

<script>

export default {
  props: {
    address: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style lang="scss">
  .info-grid {
    margin: 0;
    padding: 0;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(50px, auto);
    grid-gap: 1rem;

    list-style: none;
  }
  .info-grid__item {
    --side-padding: 0.9rem;

    position: relative;
    padding: 1rem var(--side-padding);

    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
  }
  .info-grid__description {
    --line-height: 1.6rem;

    position: absolute;
    top: calc(var(--line-height) / -2);
    left: var(--side-padding);

    padding: 0 0.25rem;
    
    font-size: 1rem;
    line-height: var(--line-height);
    color: var(--border-color);
    
    background-color: var(--color-white);
  }
</style>