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
      <base-modal
        :visible="isModalVisible"
        @close="closeModal"
        :mods="['compact']"
      >
        <div class="confirmation">
          <p class="confirmation__text">
            <span
              class="confirmation__highlighted confirmation__highlighted--red"
              >Внимание!</span
            >
            <span class="confirmation__highlighted"
              >Данное действие отменить нельзя!</span
            >
            <span class="confirmation__highlighted"
              >Сбрасываем текущий мак-адрес?</span
            >
          </p>
          <div class="confirmation__buttons-wrapper">
            <button
              class="confirmation__button site-button"
              @click="reset"
              :disabled="isReseted"
            >
              Да
            </button>
            <button
              class="confirmation__button site-button site-button--green"
              @click="closeModal"
            >
              Нет
            </button>
          </div>
        </div>
      </base-modal>
    </template>
  </base-card>
</template>

<script>
import Api from "@/utils/network.js";
import Banner from "@/utils/infoBanner.js";

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
        await this.$store.dispatch("user/setCid");
        this.closeModal();
        Banner.show(this.$store, {
          status: true,
          message: "Мак-адрес успешно сброшен",
          statusCode: "200",
        });
      } catch (error) {
        this.closeModal();
        if (error.status == 401) {
          this.$router.push("/login");
          Banner.show(this.$store, {
            message: "Вы не авторизованы для этого действия",
            statusCode: "401",
          });
        } else {
          Banner.show(this.$store, {
            message: "Ошибка. Повторите запрос позже",
            statusCode: "400",
          })
        }
      }
    },
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
    cid() {
      let cid = this.$store.getters["user/cid"];
      if (cid.includes(";")) {
        const splitted = cid.split(";");
        cid = splitted[0];
      }
      return cid ? cid : "Нет записи";
    },
    isReseted() {
      return this.cid === "Нет записи";
    },
  },
};
</script>

<style lang="scss" scoped>
.confirmation {
  --side: 100%;
  margin: 0 auto;
  padding: 1rem;
  width: var(--side);
}
.confirmation__text {
  margin: 0 0 1.2rem;
  display: flex;
  flex-flow: column nowrap;

  font-size: 1rem;
  line-height: 1.4rem;
  color: var(--font-color);
}
.confirmation__highlighted {
  color: inherit;
  font-size: inherit;
  line-height: inherit;

  &--red {
    font-size: 1.4rem;
    color: var(--color-red);
    margin-bottom: 0.5rem;
  }
}
.confirmation__buttons-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.confirmation__button {
  max-width: 45%;
}
</style>
