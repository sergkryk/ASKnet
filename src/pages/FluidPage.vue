<template>
  <form @submit.prevent="submitHandler">
    <div>
      <label for="minFont">Минимальный размер шрифта</label>
      <input type="number" id="minFont" v-model="minFont">
    </div>
    <div>
      <label for="maxFont">Максимальный размер шрифта</label>
      <input type="number" id="maxFont" v-model="maxFont">
    </div>
    <div>
      <label for="minViewport">Минимальная ширина вьюпорта</label>
      <input type="number" id="minViewport" v-model="minViewport">
    </div>
    <div>
      <label for="maxViewport">Максимальная ширина вьюпорта</label>
      <input type="number" id="maxViewport" v-model="maxViewprot">
    </div>
    <button type="submit">Результат</button>
    <p>{{ cssRule }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      cssRule: '',
      minFont: '',
      maxFont: '',
      minViewport: '',
      maxViewprot: '',
    }
  },
  methods: {
    submitHandler() {
      const view = (100 * (this.maxFont - this.minFont)) / (this.maxViewprot - this.minViewport)
      const r = ((this.minViewport * this.maxFont) - (this.maxViewprot * this.minFont)) / (this.minViewport - this.maxViewprot) / 16
      const minFontRem = this.minFont / 16
      const maxFontRem = this.maxFont / 16
      this.cssRule = `clamp(${minFontRem}rem, ${view}vw + ${r ? r : '0'}rem, ${maxFontRem}rem);`
    }
  }
}
</script>

<style>

</style>