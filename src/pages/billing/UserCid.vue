<template>
  <base-widget title="Мак-адрес" :content="content" icon="macaddress" buttonTitle="сбросить" :clickHandler="onButtonClick"></base-widget>
</template>

<script>
import BaseWidget from '../ui/BaseWidget.vue'

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