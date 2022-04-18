<template>
  <base-widget title="Статус" :content="content" icon="statusok" buttonTitle="изменить" :clickHandler="setUserStatus"></base-widget>
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
  methods: {
    setUserStatus() {
      console.log('I am setting the status');
    },
  },
}
</script>

<style>

</style>