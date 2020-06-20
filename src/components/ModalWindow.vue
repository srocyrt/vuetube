<template>
  <div class="modal">
    <div class="content">
      <button v-if="showClose" @click="closeWindow()">&times;</button>
      <component :is="iconType" :size="60" @finish="closeWindow()" />
      <p v-text="message"></p>
    </div>
  </div>
</template>

<script>
import IconDone from "./icons/IconDone";
import IconLoad from "./icons/IconLoad";

export default {
  name: "ModalWindow",
  components: {
    IconDone,
    IconLoad
  },
  props: {
    type: {
      type: String,
      default: "default"
    },
    message: {
      type: String,
      default: ""
    }
  },
  methods: {
    closeWindow() {
      this.$emit("close");
    }
  },
  computed: {
    iconType() {
      return `Icon${this.type.charAt(0).toUpperCase()}${this.type
        .slice(1)
        .toLowerCase()}`;
    },
    showClose() {
      // TODO: Bad? OCP violation?
      switch (this.type.toLowerCase()) {
        case "load":
        case "done":
          return false;
        default:
          return true;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.modal
  position fixed
  top 0
  left 0
  z-index 1
  width 100vw
  height 100vh
  background-color rgba(0, 0, 0, 0.6)
  display flex
  justify-content  center
  align-items center

.content
  min-width 15%
  max-width 60%
  min-height 10%
  max-height 40%
  background-color white
  position relative
  padding 20px
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  overflow hidden auto

button
  position absolute
  top 0
  right 0
  width 30px
  height 30px
  padding 2px
  border none
  background transparent
  font-size 1em
  cursor pointer
  &:focus
    outline 0

p
  margin-top 20px
  text-align center
</style>
