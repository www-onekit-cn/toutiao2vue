<template>
  <input
         :class="['onekit-input',onekitClass]"
         :style="onekitStyle"
         :id="onekitId" />
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-input",
    mixins: [toutiao_behavior, onekit_behavior],
    props: {


    },
    methods: {

    }
  }
</script>

<style>
</style>