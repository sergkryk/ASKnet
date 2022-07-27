<template>
  <base-card
    title="Мак-адрес"
    :content="cid"
    icon="macaddress"
    buttonTitle="сбросить"
    :buttonState="isReseted"
    :clickHandler="openModal"
  >
    <template #modal>
      <base-modal :visible="isModalVisible" @close="closeModal" :mods="['compact']">
        <div class="confirmation">
          <p class="confirmation__text">
            Внимание! Данное действие отменить нельзя. Вы действительно хотите
            сбросить ваш текущий мак-адрес?
          </p>
          <button
            class="confirmation__button"
            @click="reset"
            :disabled="isReseted"
          >
            Да
          </button>
          <button class="confirmation__button" @click="closeModal">Нет</button>
        </div>
      </base-modal>
    </template>
  </base-card>
</template>

<script>
import Api from "@/utils/network.js"

export default {
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    async reset() {
      try {
        await Api.resetUserCid();
        await this.$store.dispatch("user/setCid")
        this.closeModal()
      } catch (error) {
        console.log(error)
      }
    },
    openModal() {
      this.isModalVisible = true;
      this.$store.dispatch("setIsModal", true)
    },
    closeModal() {
      this.isModalVisible = false;
      this.$store.dispatch("setIsModal", false)
    },
  },
  computed: {
    cid() {
      let cid = this.$store.getters["user/cid"]
      if (cid.includes(";")) {
        const splitted = cid.split(";")
        cid = splitted[0]
      }
      return cid ? cid : "Нет записи"
    },
    isReseted() {
      return this.cid === "Нет записи"
    },
  },
};
</script>

<style lang="scss" scoped>
.confirmation {
  --side: 25vw;
  margin: 0 auto;
  width: var(--side);
}
</style>
