<template>
<div class="wrapper">
    <header>
      <slot name="header"></slot>
    </header>
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
  header {
    background-color: #ffffff;
    box-shadow: 0 0 5px 0 rgba(1, 3, 4, 0.19);
  }
  main {
    flex-grow: 1;
  }
  footer {
    flex-shrink: 0;
  }
</style>
