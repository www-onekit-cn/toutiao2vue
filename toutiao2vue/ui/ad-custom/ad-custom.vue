<template>
  <div
       :class="['onekit-ad-custom',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <slot></slot>
  </div>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-ad-custom",
    mixins: [toutiao_behavior, onekit_behavior],
    props: {
      "unit-id": {
        type: String,
        defaul: ""
      },
      "ad-intervals": {
        type: Number,
        defaul: ""
      },

    },
    methods: {

    }
  }
</script>

<style>
</style>