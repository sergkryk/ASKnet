<template>
  <table class="base-table" :class="mods">
    <thead v-if="$slots.theader">
      <slot name="theader"></slot>
    </thead>
    <tbody>
      <slot name="tbody"></slot>
    </tbody>
    <tfoot v-if="$slots.tfooter">
      <slot name="tfooter"></slot>
    </tfoot>
  </table>
</template>

<script>
export default {
  props: {
    mods: {
      type: Array,
      required: false,
    }
  }
};
</script>

<style lang="scss">
.base-table {
  --header-bcg: #04ab55;
  --border-color: #e4e8eb;

  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
  border-bottom: 1px solid #f4f6f8;

  th {
  padding: 0.3rem 1rem;
  text-align: left;
  font-weight: 500;
  color: var(--color-white);
  background-color: var(--header-bcg);

  &:first-child {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  &:last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
}
td {
  color: var(--font-color-light);
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);

  &:only-child {
    border-top: 1px solid var(--border-color);
  }
}
}
.base-table--blue {
   th {
     background-color: #1890ff;
   }
}
.base-table--accent {
  th {
    text-align: center;
  }
  td {
    color: var(--font-color);
    font-size: 1.2rem;
    text-align: center;
  }
}
</style>
