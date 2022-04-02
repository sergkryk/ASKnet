<template>
  <header class="header">
    <div class="container">
      <slot name="header"></slot>
    </div>
  </header>
  <main>
    <div class="container">
      <slot name="main"></slot>
    </div>
  </main>
  <footer>
    <div class="container">
      <slot name="footer"></slot>
    </div>
  </footer>
</template>

<style>

</style>