<template>
  <base-widget title="Статус" :content="content" :icon="icon" buttonTitle="изменить" :clickHandler="setUserStatus"></base-widget>
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
    setUserStatus() {
      console.log('I am setting the status');
    },
  },
  computed: {
    icon() {
      return this.content === 'Активен' ? 'enabled' : 'disabled';
    }
  }
}
</script>