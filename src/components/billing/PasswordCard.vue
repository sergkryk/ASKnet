<template>
  <base-card
    title="Пароль"
    :content="password"
    icon="password"
    buttonTitle="изменить"
    :clickHandler="openModal"
  >
    <template #modal>
      <base-modal
        :visible="isModalVisible"
        @close="closeModal"
        :mods="['password']"
      >
        <h3 class="modal-heading">Изменение пароля пользователя</h3>
        <password-form @close="closeModal"></password-form>
      </base-modal>
    </template>
  </base-card>
</template>

<script>
import PasswordForm from "@/components/billing/PasswordForm.vue";

export default {
  components: {
    PasswordForm,
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
  computed: {
    password() {
      return this.$store.getters["user/password"];
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 1rem 0 1rem;
}
</style>
>
