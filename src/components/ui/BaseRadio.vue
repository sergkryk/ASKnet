.<template>
  <div>
    <input type="radio" :name="radioName" :id="radioId">
    <label :for="radioId">{{ radioLabel }}</label>
  </div>
</template>

<script>
export default {
  props: {
    radioId: {
      type: String,
      required: true,
    },
    radioName: {
      type: String,
      required: true,
    },
    radioLabel: {
      type: String,
      required: false,
      default: '',
    },
  }
}
</script>

<style>

</style>