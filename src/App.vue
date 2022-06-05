<template>
  <the-container>
    <template v-slot:header>
      <the-header></the-header>
    </template>
    <template v-slot:main>
      <inform-banner v-if="isLoading"></inform-banner>
      <svg-sprite></svg-sprite>
      <router-view></router-view>
    </template>
    <template v-slot:footer>
      <!-- <the-footer></the-footer> -->
    </template>
  </the-container>
</template>

<script>
import TheContainer from '@/components/layout/TheContainer.vue';
import TheHeader from '@/components/layout/TheHeader.vue';
// import TheFooter from '@/components/layout/TheFooter.vue';
import SvgSprite from '@/components/svg/SvgSprite.vue';

export default {
  components: {
    TheContainer,
    TheHeader,
    // TheFooter,
    SvgSprite,
  },
  computed: {
    isModal() {
      return this.$store.getters['isModal'];
    },
    isLoading() {
      return this.$store.getters['loading/status'];
    }
  },
  watch: {
    isModal() {
      if (this.isModal) {
        document.querySelector('body').setAttribute('style', 'overflow: hidden');
      } else {
        document.querySelector('body').removeAttribute('style');
      }
    }
  }
}
</script>
