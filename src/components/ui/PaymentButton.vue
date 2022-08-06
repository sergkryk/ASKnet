<template>
  <div class="wrapper">
    <button
      type="button"
      class="site-button site-button--green"
      @click="openModal"
    >
      Внести карту оплаты
    </button>
    <base-modal :visible="isModalVisible" @close="closeModal" :mods="['password']">
      <h3 class="modal-heading">Пополнение счёта картой оплаты</h3>
      <payment-form @completed="closeModal"></payment-form>
    </base-modal>
  </div>
</template>

<script>
import PaymentForm from "@/components/billing/PaymentForm.vue";

export default {
  components: {
    PaymentForm,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
      this.$store.dispatch("setIsModal", true);
    },
    closeModal() {
      this.isModalVisible = false;
      this.$store.dispatch("setIsModal", false);
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 1rem 0 1rem;
}
</style>