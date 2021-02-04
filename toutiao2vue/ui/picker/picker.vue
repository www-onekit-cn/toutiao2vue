<template>
  <div
       :class="['onekit-picker',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <div class="selector" v-if="mode === 'selector'">
      <multilevel :column="'1'" :data="range" />
      <slot></slot>
    </div>


  </div>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import multilevel from './_/mutiselector-picker/mutiselector'
  import { eventBus } from '../../eventBus'
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
    },
    mounted() {
      eventBus.$on('picker-cancel', () => {
        this.$emit('cancel')
      })
    }
  }
</script>

<style>
  .onekit-picker {
    position: relative;
    width: 100%;
  }
</style>