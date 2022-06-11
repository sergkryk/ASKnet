.<template>
  <div>
    <input type="checkbox" :name="checkboxName" :id="checkboxId">
    <label :for="checkboxId">{{ checkboxLabel }}</label>
  </div>
</template>

<script>
export default {
  props: {
    checkboxId: {
      type: String,
      required: true,
    },
    checkboxName: {
      type: String,
      required: true,
    },
    checkboxLabel: {
      type: String,
      required: false,
      default: '',
    },
  }
}
</script>

<style>

</style>