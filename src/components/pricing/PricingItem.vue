<template>
  <li class="card">
    <h3 class="card__title" :class="setTitleMods(mods)">{{ title }}</h3>
    <div class="card__price">
      <span>{{ price }}</span>
      <span>₽</span>
    </div>
    <p class="card__description">{{ content }}</p>
    <ul class="card__details">
      <li
        class="card__details-item"
        :class="setFeaturesMods(feature)"
        v-for="feature in features"
        :key="feature.content"
      >
        <svg aria-label="Иконка">
          <use :xlink:href="setFeaturesIcon(feature)"></use></svg
        ><span>{{ setContent(feature) }}</span>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    speed: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    mods: {
      type: Array,
      required: false,
    },
    features: {
      type: Array,
      required: true,
    },
  },
  methods: {
    setTitleMods(modsList) {
      if (modsList) return modsList.map((mod) => `card__title--${mod}`);
    },
    setFeaturesIcon(feature) {
      if (!feature.plans.includes(this.id) && feature.icon !== "coins") {
        return "#na";
      } else {
        return `#${feature.icon}`;
      }
    },
    setFeaturesMods(feature) {
      if (feature.icon === "coins") {
        return "";
      }
      return feature.plans.includes(this.id)
        ? ""
        : "card__details-item--disabled";
    },
    setContent(feature) {
      if (feature.icon === "www") {
        return `${feature.content} до ${this.speed} мбит/с.`;
      }
      if (feature.icon === "coins" && !feature.plans.includes(this.id)) {
        return "Предоплата за месяц";
      } else {
        return feature.content;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  --padding-top: 20px;
  --padding-left: 15px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding: 0 var(--padding-left) var(--padding-top);
  overflow: hidden;

  background-color: var(--color-white);
  border-radius: 5px;
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
}

.card__title {
  --fsize: clamp(1.375rem, 0.25vw + 1.3125rem, 1.5rem);
  margin: 0 0 20px calc(var(--padding-left) * -1);
  padding: 18px 0;
  width: calc(100% + var(--padding-left) * 2);

  background-color: var(--site-blue);

  font-size: var(--fsize);
  line-height: calc(var(--fsize) * 1.25);
  text-align: center;
  color: var(--color-white);
  text-transform: uppercase;

  &--yellow {
    background-color: var(--color-yellow);
  }

  &--green {
    background-color: var(--color-green);
  }
}

.card__price {
  --fsize: clamp(3.5rem, 1vw + 3.25rem, 4rem);
  position: relative;

  margin: 0 auto clamp(0.625rem, 1.25vw + 0.3125rem, 1.25rem);
  padding: 10px 20px;

  font-size: var(--fsize);

  & span:last-child {
    font-size: calc(var(--fsize) / 2);
  }
}

.card__description {
  margin: 0 0 20px;
  padding: 0;

  font-size: 1rem;
  line-height: 1.2rem;
  color: var(--pricing-descr);
}

.card__details {
  margin: 0;
  padding: 0;

  list-style: none;
}

.card__details-item {
  position: relative;

  margin-bottom: 5px;
  padding-left: 35px;

  color: var(--color-green);

  & svg {
    position: absolute;
    top: 50%;
    left: 0;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
  }
  & span {
    color: var(--color-dark-green);
  }
  &--disabled {
    color: rgba(0, 0, 0, 0.3);

    & span {
      color: inherit;
    }

    & svg {
      color: var(--error-color);
    }
  }
}
</style>