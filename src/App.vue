<template>
  <main-layout>
    <template v-slot:header>
      <the-header></the-header>
    </template>
    <template v-slot:main>
      <svg-sprite></svg-sprite>
      <router-view></router-view>
    </template>
    <template v-slot:footer>
      <the-footer></the-footer>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from '@/components/layout/MainLayout.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import SvgSprite from '@/components/svg/SvgSprite.vue';

export default {
  components: {
    MainLayout,
    TheHeader,
    TheFooter,
    SvgSprite,
  }
}
</script>
