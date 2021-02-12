<template>
  <div>
    <input type="text"
           @input="formSubmit"
           :value="value"
           placeholder="What do you need to do?"
           class="p-4 max-w-xl mx-auto bg-white rounded-xl shadow-md flex items-center
                    space-x-4 border border-transparent focus:outline-none focus:ring
                    focus:ring-blue-300 focus:border-transparent w-full">
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {

  },
  props: {
    value: {
      type: String,
      default: ''
    }

  },
  methods: {
    formSubmit($event) {
      console.log($event.target.value)
      if ($event.target.value.length <= 0) {
        return
      }

      this.$emit('submit', $event.target.value)
    }
  }

}
</script>

<style scoped>
</style>