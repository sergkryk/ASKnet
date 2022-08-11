<template>
  <li class="pricing__card">
    <h3 class="pricing__card-title" :class="setTitleMods(mods)">{{ title }}</h3>
    <div class="pricing__price">
      <span>{{ price }}</span>
      <span>₽</span>
    </div>
    <p class="pricing__description">{{ content }}</p>
    <ul class="pricing__details">
      <li
        class="pricing__details-item"
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
      if (modsList) return modsList.map((mod) => `pricing__card-title--${mod}`);
    },
    setFeaturesIcon(feature) {
      if (!feature.plans.includes(this.id) && feature.icon !== "coins") {
        return "#na"
      } else {
        return `#${feature.icon}`
      }
    },
    setFeaturesMods(feature) {
      if (feature.icon === "coins") {
        return ""
      }
      return feature.plans.includes(this.id) ? "" : "pricing__details-item--disabled";
    },
    setContent(feature) {
      if (feature.icon === "www") {
        return `${feature.content} до ${this.speed} мбит/с.`;
      }
      if (feature.icon === "coins" && !feature.plans.includes(this.id)) {
        return "Предоплата за месяц"
      } else {
        return feature.content
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pricing__card {
  --padding-top: 20px;
  --padding-left: 15px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding: 0 var(--padding-left) var(--padding-top);
  overflow: hidden;

  background-color: var(--color-white);
  border-radius: 5px;
  box-shadow: 0 0 1px 0 var(--pricing-shadow);
}

.pricing__card-title {
  margin: 0 0 20px calc(var(--padding-left) * -1);
  padding: 18px 0;
  width: calc(100% + var(--padding-left) * 2);

  background-color: var(--site-blue);

  font-size: 1.25rem;
  line-height: 1.5rem;
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

.pricing__price {
  position: relative;

  margin: 0 auto 20px;
  padding: 10px 20px;

  font-size: 4rem;

  & span:last-child {
    font-size: 2rem;
  }
}

.pricing__description {
  margin: 0 0 20px;
  padding: 0;

  font-size: 1rem;
  line-height: 1.2rem;
  color: var(--pricing-descr);
}

.pricing__details {
  margin: 0;
  padding: 0;

  list-style: none;
}

.pricing__details-item {
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
    color: rgba(0,0,0,0.3);

    & span {
      color: inherit;
    }
    
    & svg {
      color: var(--error-color);
    }
  }
}

@media (min-width: 768px) {
  .pricing__card {
    margin: 1rem;
  }
}
</style>