<template>
  <div id="vueplayer">
    <ModalWindow
      v-if="modal.show"
      :type="modal.type"
      :message="modal.message"
      @close="hideModal()"
    />
  </div>
</template>

<script>
import ModalWindow from "./components/ModalWindow.vue";

export default {
  name: "vueplayer",
  components: {
    ModalWindow
  },
  data() {
    return {
      modal: {
        show: false,
        type: "default",
        message: ""
      }
    };
  },
  mounted() {
    this.LoadAPI();
  },
  methods: {
    LoadAPI() {
      this.showModal("load", "Connecting to Youtube API.");
      setTimeout(() => this.showModal("done", "Done."), 3000);
    },
    showModal(type, message) {
      this.modal.show = true;
      this.modal.type = type;
      this.modal.message = message;
    },
    hideModal() {
      this.modal.show = false;
      this.modal.type = "default";
      this.modal.message = "";
    }
  }
};
</script>
<style lang="stylus" scoped>
#vueplayer
  font-family 'Avenir', Helvetica, Arial, sans-serif
</style>

<style lang="stylus">
@import "./reset.styl"

body
  overflow hidden
</style>
