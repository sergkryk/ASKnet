<template>
  <div class="wrapper">
    <slot name="header"></slot>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  padding-top: var(--header-height); // высота хедера
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
}
footer {
  flex-shrink: 0;
}
</style>
