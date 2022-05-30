<template>
  <base-card title="Мак-адрес" :content="cid" icon="macaddress" buttonTitle="сбросить" :clickHandler="fetchCid"></base-card>
</template>

<script>

export default {
  methods: {
    async fetchCid() {
      await this.$store.dispatch('user/setCid');
    },
    // async resetCid() {
    //   const response = await fetch(`${USER_DETAILS_URL}/cid`, {
    //     method: 'PUT',
    //     headers: this.headers,
    //   });
    //   if (response.status === 200) {
    //     this.fetchUserDetails();
    //   } else {
    //     console.log('Something goes wrong');
    //   }
    // },
  },
  computed: {
    cid() {
      return this.$store.getters['user/cid'];
    }
  }
}
</script>

<style>

</style>