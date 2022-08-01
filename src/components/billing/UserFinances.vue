<template>
  <table class="finances site-table">
    <thead>
      <tr>
        <th>Операции</th>
        <th>Сумма</th>
        <th>Дата</th>
        <th class="finances__details-header">Детали</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="prevPay">
        <td>
          <div class="site-table__container">
            <div class="site-table__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17.526 17.526"
                fill="currentColor"
              >
                <path
                  d="M8.417 17.279s.444.518.909.053c.639-.64 6.547-6.742 6.547-6.742s.818-.813-.266-.813h-2.811V.388S12.808 0 12.308 0H5.397c-.702 0-.58.464-.58.464v9.507H1.772c-.891 0-.071.776-.071.776l6.716 6.532z"
                />
              </svg>
            </div>
            <span>Последнее пополнение</span>
          </div>
        </td>
        <td>{{ prevPay.sum }}&#8381;</td>
        <td>{{ date.prevPay }}</td>
        <td class="finances__details-data">{{ prevPay.dsc }}</td>
      </tr>
      <tr v-if="prevFee">
        <td>
          <div class="site-table__container">
            <div class="site-table__arrow site-table__arrow--red">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17.526 17.526"
                fill="currentColor"
              >
                <path
                  d="M8.417 17.279s.444.518.909.053c.639-.64 6.547-6.742 6.547-6.742s.818-.813-.266-.813h-2.811V.388S12.808 0 12.308 0H5.397c-.702 0-.58.464-.58.464v9.507H1.772c-.891 0-.071.776-.071.776l6.716 6.532z"
                />
              </svg>
            </div>
            <span>Последнее списание</span>
          </div>
        </td>
        <td>{{ prevFee.sum }}&#8381;</td>
        <td>{{ date.prevFee }}</td>
        <td class="finances__details-data">{{ prevFee.dsc }}</td>
      </tr>
      <tr v-if="nextFee">
        <td>
          <div class="site-table__container">
            <div class="site-table__arrow site-table__arrow--blue">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
                />
              </svg>
            </div>
            <span>Следующее списание</span>
          </div>
        </td>
        <td>{{ nextFee.sum }}&#8381;</td>
        <td>{{ date.nextFee }}</td>
        <td class="finances__details-data">{{ nextFee.dsc }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { formatDate } from "@/utils/utils";

export default {
  props: {
    finance: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      prevPay: this.finance.prevPay,
      prevFee: this.finance.prevFee,
      nextFee: this.finance.nextFee,
    };
  },
  computed: {
    date() {
      return {
        prevPay: formatDate(this.prevPay.date),
        prevFee: formatDate(this.prevFee.date),
        nextFee: formatDate(this.nextFee.date),
      };
    },
  },
};
</script>

<style lang="scss">
.site-table {
  --header-color: #637381;
  --header-bcg: #f4f6f8;

  font-size: clamp(0.875rem, 0.5vw + 0.75rem, 1rem);

  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
  border-bottom: 1px solid #f4f6f8;

  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  overflow: hidden;

  th {
    padding: 0.7rem 1rem;
    text-align: left;
    font-weight: 500;
    color: var(--header-color);
    background-color: var(--header-bcg);
  }

  td {
    padding: 0.5rem;
  }
}

.finances__details-header,
.finances__details-data {
  display: none;

  @media (min-width: 1024px) {
    display: table-cell;
  }
}

.site-table__container {
  display: flex;
  flex-flow: row nowrap;

  justify-items: center;
  align-items: center;
}
.site-table__arrow {
  --arrow-width: 24px;
  margin-right: 0.5rem;
  padding: calc(var(--arrow-width) / 4);

  width: var(--arrow-width);
  height: var(--arrow-width);

  display: flex;
  justify-content: center;
  align-items: center;

  color: rgb(0, 123, 85);
  background-image: linear-gradient(
    135deg,
    rgba(0, 123, 85, 0) 0%,
    rgba(0, 123, 85, 0.24) 100%
  );
  border-radius: 50%;
    
  display: none;

  svg {
    width: 100%;
    height: 100%;

    color: var(--color-green);
    opacity: 0.7;
  }

  &--red {
    color: var(--color-red);
    background-image: linear-gradient(
      135deg,
      rgba(183, 33, 54, 0) 0%,
      rgba(183, 33, 54, 0.24) 100%
    );

    svg {
      transform: rotate(180deg);
      color: var(--color-red);
    }
  }
  &--blue {
    color: rgb(12, 83, 183);
    background-image: linear-gradient(
      135deg,
      rgba(12, 83, 183, 0) 0%,
      rgba(12, 83, 183, 0.24) 100%
    );

    svg {
      color: var(--color-blue);
    }
  }
}
</style>
