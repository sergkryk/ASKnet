<template>
  <base-widget title="Действительный до" :content="content" icon="calendar" buttonTitle="продлить" :clickHandler="onButtonClick"></base-widget>
</template>

<script>
import BaseWidget from './BaseWidget.vue';

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
      console.log();
    },
  },
}
</script>