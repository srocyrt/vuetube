<template>
  <svg
    :style="cssVariable"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
  >
    <circle
      :style="{ animationPlayState }"
      fill="none"
      cx="50"
      cy="50"
      r="46"
    />
  </svg>
</template>

<script>
export default {
  name: "IconLoad",
  props: {
    color: {
      type: String,
      default: "#7ac142"
    },
    size: {
      type: Number,
      default: 48
    }
  },
  data() {
    return {
      animationPlayState: "paused"
    };
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      this.animationPlayState = "running";
    }
  },
  computed: {
    cssVariable() {
      return {
        "--color": this.color,
        "--size": `${this.size}px`
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
svg
  width var(--size)
  height var(--size)

circle
  stroke var(--color)
  stroke-width 8
  stroke-dasharray calc(289 / 2)
  stroke-dashoffset 289
  animation stroke 1.2s linear infinite

@keyframes stroke
  to
    stroke-dashoffset 0
</style>
