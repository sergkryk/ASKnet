<template>
  <div class="banner" :class="statusClass" @click="closeBanner">
    <div class="banner__svg-wrapper">
      <svg>
        <use :xlink:href="'#' + 'ok'"></use>
      </svg>
    </div>
    <div class="banner__content">
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<script>
import Banner from "@/utils/infoBanner.js";
export default {
  methods: {
    closeBanner() {
      Banner.hide(this.$store);
    }
  },
  computed: {
    message() {
      return this.$store.getters["loading/message"];
    },
    statusClass() {
      const code = this.$store.getters["loading/statusCode"];
      const codes = {
        102: "processing",
        200: "completed",
        400: "rejected",
      };
      return codes[code];
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  --success-color: #3cc79e;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 999;

  width: 240px;
  height: 135px;

  display: flex;
  flex-flow: column nowrap;

  background-color: var(--color-white);
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: calc(50% - 1px);

    background-color: var(--success-color);
  }

  // &.processing {

  // }
  // &.completed {

  // }
  // &.rejected {

  // }
}
.banner__svg-wrapper {
  min-height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-white);

  svg {
    width: 48px;
    height: 48px;
  }
}
.banner__content {
  padding: 0.5rem;
  min-height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: block;
    margin: 0 auto;
    font-weight: 500;
    color: var(--success-color);
    text-align: center;
    font-size: 18px;
  }
}
</style>
