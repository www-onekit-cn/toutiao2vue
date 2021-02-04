<template>
  <div
       :class="['onekit-picker',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <multilevel :column="'1'" :data="range" />
    <slot></slot>
  </div>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import multilevel from './_/mutiselector-picker/mutiselector'

  export default {
    name: "onekit-picker",
    mixins: [toutiao_behavior, onekit_behavior],
    props: {
      mode: {
        type: String,
        default: 'selector',
      },
      disabled: {
        type: Boolean,
        default: false
      },
      range: Array
    },
    components: {
      multilevel
    }
  }
</script>

<style>
  .onekit-picker {
    position: relative;
    width: 100%;
  }
</style>