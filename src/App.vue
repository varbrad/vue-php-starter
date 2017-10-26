<template>
  <div id="app">
    <p>{{ response }}</p>
  </div>
</template>

<script>
import { get } from './js/api'

export default {
  name: 'app',
  data () {
    return {
      response: 'Loading'
    }
  },
  async mounted () {
    let response = await get()
    this.response = response.data
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
