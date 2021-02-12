<template>
  <h1>About</h1>
  <p>
    {{ getCount }}
  </p>
  <p>
    {{ getCell }}
  </p>
  <button @click="countButton">Click</button>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'about',
  computed: {
    ...mapGetters([
      'getCount',
      'getCell'
    ])
  },
  methods: {
    countButton() {
      this.$store.dispatch('incrementCount')
      this.$store.dispatch('fetchRandomUser')
    }
  }
}
</script>

<style scoped>
</style>