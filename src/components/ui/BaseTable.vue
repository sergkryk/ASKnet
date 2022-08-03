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
    },
  },
};
</script>

<style lang="scss">
.base-table {
  --header-bcg: #04ab55;
  --border-color: #e4e8eb;
  --cell-padding: clamp(0.3125rem, 1.25vw, 0.625rem);

  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
  border-bottom: 1px solid #f4f6f8;
  font-size: clamp(0.875rem, 0.5vw + 0.75rem, 1rem);

  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;

  overflow: hidden;

  th {
    padding: var(--cell-padding);
    text-align: left;
    font-weight: 500;
    color: var(--color-white);
    background-color: var(--header-bcg);
  }

  td {
    color: var(--font-color-light);
    padding: var(--cell-padding);
    border-bottom: 1px solid var(--border-color);

    &:only-child {
      border-top: 1px solid var(--border-color);
    }
  }
}
.base-table--finances {
  th {
    background-color: #1890ff;
    // text-align: center;
    &:nth-child(5) {
      display: none;

      @media (min-width: 800px) {
        display: table-cell;
      }
    }
  }
  td {
    color: var(--font-color);
    font-size: inherit;
    // text-align: center;
    &:nth-child(5) {
      display: none;

      @media (min-width: 800px) {
        display: table-cell;
      }
    }
  }
}
.base-table--stats {
  th {
    &:nth-child(3) {
      display: none;

      @media (min-width: 800px) {
        display: table-cell;
      }
    }
  }
  td {
    &:nth-child(3) {
      display: none;

      @media (min-width: 800px) {
        display: table-cell;
      }
    }
  }
}
</style>
