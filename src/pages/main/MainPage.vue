<template>
  <hero-section></hero-section>
  <news-section></news-section>
  <pricing-section></pricing-section>
</template>

<script>
import HeroSection from "@/pages/main/HeroSection.vue"
import NewsSection from "@/pages/main/NewsSection.vue"
import PricingSection from "@/pages/main/PricingSection.vue"

export default {
  components: {
    HeroSection,
    NewsSection,
    PricingSection,
  },
  data() {
    return {

    };
  },
};
</script>



