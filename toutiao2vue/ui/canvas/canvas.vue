<template>
  <canvas
          :class="['onekit-canvas',onekitClass]"
          :style="onekitStyle"
          :id="id">
  </canvas>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-canvas",
    mixins: [toutiao_behavior, onekit_behavior],
    data() {
      return { id: '' }
    },
    props: {
      "type": {
        type: String,
        defaul: ""
      },
      "canvas-id": {
        type: String,
        defaul: ""
      },
      "disable-scroll	": {
        type: Boolean,
        defaul: false
      },


    },
    mounted() {
      const id = this.canvasId || this.onekitId
      this.id = id
    },
    methods: {

    }
  }
</script>

<style>
</style>