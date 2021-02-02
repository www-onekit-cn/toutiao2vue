<template>
  <div
       :class="['onekit-scroll-view',onekitClass]"
       :style="{onekitStyle}"
       :id="onekitId"
       @touchstart="scroll">
    <slot></slot>
  </div>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-scroll-view",
    mixins: [toutiao_behavior, onekit_behavior],
    props: {


    },
    mounted() {},
    methods: {
      scroll() {
        this.$emit('scroll')
      }
    }
  }
</script>

<style>
  .onekit-scroll-view {
    /* width: 100%; */
    height: 200px;
    overflow: scroll;
  }
</style>