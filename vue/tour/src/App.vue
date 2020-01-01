<template>
  <div id="app">
    <router-view />
    <footerV />
  </div>
</template>

<script>
import footerV from './components/footer/footer.vue'
export default {
  name: 'app',
  components: {
    footerV
  }
}
</script>

<style>
</style>
