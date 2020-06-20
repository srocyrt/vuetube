<template>
  <svg
    :style="{ ...cssVariable, animationPlayState }"
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
    <path :style="{ animationPlayState }" fill="none" d="M28 55l14 14 35 -35" />
  </svg>
</template>

<script>
export default {
  name: "IconDone",
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
      animationPlayState: "paused",
      duration: 1200
    };
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      this.animationPlayState = "running";
      setTimeout(() => this.$emit("finish"), this.duration + 1000);
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
  flex 0 0 auto
  width var(--size)
  height var(--size)
  border-radius 50%
  stroke-width 8
  box-shadow: inset 0px 0px 0px var(--color)
  animation fill 0.4s ease-in-out 0.4s paused forwards, scale 0.4s ease-in-out 0.9s paused both

circle
  stroke var(--color)
  stroke-dasharray 289
  stroke-dashoffset 289
  fill none
  animation stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) paused forwards

path
  stroke white
  stroke-dasharray 100
  stroke-dashoffset 100
  animation stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s paused forwards

@keyframes stroke
  to
    stroke-dashoffset 0

@keyframes scale
  0%, 100%
    transform none
  50%
    transform scale(1.1, 1.1)

@keyframes fill
  to
    box-shadow inset 0px 0px 0px var(--size) var(--color)
</style>
