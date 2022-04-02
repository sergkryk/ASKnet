<template>
  <main-layout>
    <template v-slot:header>
      <the-header></the-header>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from './components/layout/MainLayout.vue'
import TheHeader from './components/TheHeader.vue'

export default {
  components: {
    MainLayout,
    TheHeader
  }
}
</script>
