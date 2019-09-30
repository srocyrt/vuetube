<template>
  <div id="app">
    <ModalWindow message="Connecting to Youtube API..." />
  </div>
</template>

<script>
import ModalWindow from "./components/ModalWindow.vue";

export default {
  name: "app",
  components: {
    ModalWindow
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
</style>

<style lang="stylus">
@import "./reset.styl"

body
  overflow hidden
</style>
