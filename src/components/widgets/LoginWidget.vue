<template>
  <base-widget title="Имя пользователя" :content="content" icon="user" buttonTitle="статистика" :clickHandler="onButtonClick"></base-widget>
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