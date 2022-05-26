<template>
  <base-widget title="Пароль" :content="content" icon="password" buttonTitle="изменить" :clickHandler="onButtonClick"></base-widget>
</template>

<script>
import BaseWidget from '../billing./widgets/BaseWidget.vue'

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