<template>
  <base-card title="Мак-адрес" :content="cid" icon="macaddress" buttonTitle="сбросить" :clickHandler="resetCid" :buttonState="isReseted"></base-card>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods: {
    async fetchCid() {
      await this.$store.dispatch('user/setCid');
    },
    async resetCid() {
       await this.$store.dispatch('user/resetCid');
    },
  },
  computed: {
    cid() {
      let cid = this.$store.getters['user/cid'];
      if (cid.includes(';')) {
        const splitted = cid.split(';');
        cid = splitted[0];
      }
      return cid ? cid : 'Нет записи';
    },
    isReseted() {
      return this.cid === 'Нет записи';
    }
  }
}
</script>

<style>

</style>