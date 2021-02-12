<template>
<<<<<<< HEAD
  <div>
    <input type="text"
           @input="formSubmit"
           :value="value"
           placeholder="What do you need to do?"
           class="p-4 max-w-xl mx-auto bg-white rounded-xl shadow-md flex items-center
                    space-x-4 border border-transparent focus:outline-none focus:ring
                    focus:ring-blue-300 focus:border-transparent w-full">
  </div>
=======
    <form class="todo-form" @submit.prevent="formSubmit">
      <div>
        <input type="text"
          :value="value"
          placeholder="What do you need to do?"
          class="p-4 max-w-xl mx-auto bg-white rounded-xl shadow-md flex items-center
                space-x-4 border border-transparent focus:outline-none focus:ring
                focus:ring-blue-300 focus:border-transparent w-full">
      </div>
    </form>
>>>>>>> 0fc6712d2f6672e47c3ba63536f973567f4d9eed
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
<<<<<<< HEAD
  methods: {
    formSubmit($event) {
      console.log($event.target.value)
      if ($event.target.value.length <= 0) {
=======
  methods:{
    formSubmit($event){
      if($event.target[0].value.length <= 0){
>>>>>>> 0fc6712d2f6672e47c3ba63536f973567f4d9eed
        return
      }

      this.$emit('register-todo', $event.target[0].value)
    }
  }

}
</script>

<style scoped>
</style>