<template>
  <base-widget title="Действительный до" :content="expireDate" icon="calendar" buttonTitle="продлить" :clickHandler="onButtonClick"></base-widget>
</template>

<script>
import BaseWidget from './BaseWidget.vue'

export default {
  props: {
    content: {
      type: Number,
      required: true,
      default: 0,
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
  computed: {
    expireDate() {
      return new Date(this.content).toLocaleDateString('ru-RU');
    }
  }
}
</script>

<style>

</style>