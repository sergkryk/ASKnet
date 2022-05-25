<template>
  <base-widget title="Тарифный план" :content="content" icon="speedometr" buttonTitle="изменить" :clickHandler="onButtonClick"></base-widget>
</template>

<script>
import BaseWidget from '../ui/BaseWidget.vue'

export default {
  props: {
    content: {
      type: String,
      required: true,
    }
  },
  components: {
    BaseWidget,
  },
  methods: {
    onButtonClick() {
      console.log(this.id);
    },
  }
}
</script>

<style>

</style>