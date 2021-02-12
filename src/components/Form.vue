<template>
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
</template>

<script>
export default {
  name: 'Form',
  data(){

  },
  props:{
    value:{
      type: String,
      default: ''
    }

  },
  methods:{
    formSubmit($event){
      if($event.target[0].value.length <= 0){
        return
      }

      this.$emit('register-todo', $event.target[0].value)
    }
  }

}
</script>

<style scoped>
</style>