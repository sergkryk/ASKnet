<template>
  <base-widget title="Тарифный план" :content="content" icon="speedometr" buttonTitle="изменить" :clickHandler="onButtonClick"></base-widget>
</template>

<script>
import BaseWidget from './BaseWidget.vue'

export default {
  props: {
    content: {
      type: String,
      required: true,
      default: '',
    }
  },
  components: {
    BaseWidget,
  },
  data() {
    return {

    }
  },
  methods: {
    onButtonClick() {
      console.log();
    },
  },
}
</script>

<style>

</style>