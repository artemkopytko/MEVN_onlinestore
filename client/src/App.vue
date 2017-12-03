<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import 'normalize.css'
export default {
  name: 'app',
  components: {
      appHeader: Header
  }
}
</script>

<style>
  *, ::after, ::before {
    box-sizing: border-box;
  }
  div.container {
    margin: 0 auto;
    width: 90%;
    position: relative;
    display: block;
    max-width: 95%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
