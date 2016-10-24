<template>
  <div id="app">
    <nav-component></nav-component>
    <main-container></main-container>
  </div>
</template>

<script>
import NavComponent from './components/NavComponent.vue'
import MainContainer from './components/MainContainer.vue'

export default {
  name: 'app',
  components: {
    NavComponent,
    MainContainer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
