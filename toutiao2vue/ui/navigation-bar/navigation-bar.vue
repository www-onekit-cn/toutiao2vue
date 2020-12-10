<template>
  <div
       :class="['onekit-navigation-bar',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <slot></slot>
  </div>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import tt from '../../tt'
  export default {
    name: "onekit-navigation-bar",
    mixins: [toutiao_behavior, onekit_behavior],
    props: {
      'title': String,
      'loading': Boolean,
      'font-color': String,
      'background-color': String,
      'color-animation-duration': {
        type: Number,
        default: 0
      },
      'color-animation-timing-func': {
        type: String,
        default: 'linear'
      }
    },
    methods: {
      mounted() {
        const title = this.title
        tt.setNavigationBarTitle({
          title
        })
      }
    }
  }
</script>

<style>
</style>