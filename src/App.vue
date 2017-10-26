<template>
  <div id="app">
    <pre>{{ response }}</pre>
  </div>
</template>

<script>
import { post } from './js/api'

export default {
  name: 'app',
  data () {
    return {
      response: 'Loading'
    }
  },
  async mounted () {
    let response = await post({
      body: 'abc'
    })
    let json = await response.json()
    this.response = json
  }
}
</script>

<style>
body {
  background-color: #181919;
}

#app {
  background-color: #4c4d4f;
  margin: auto;
  width: 70%;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 3px;
  box-shadow: 0 3px 9px rgba(0, 0, 0, .2);
}

#app > pre {
  font-size: 1.5rem;
  font-weight: bold;
  color: #f9f9f9;
}
</style>
