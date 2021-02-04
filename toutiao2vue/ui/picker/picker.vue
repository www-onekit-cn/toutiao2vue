<template>
  <div
       :class="['onekit-picker',onekitClass]"
       :style="onekitStyle"
       :id="onekitId"
       :value="'2'">
    <div class="selector" v-if="mode === 'selector'">
      <multilevel :column="'1'" :data="data" />
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
    data: () => ({ data: [] }),
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
      range: Array,
      value: {
        type: Number,
        default: 0
      }
    },
    components: {
      multilevel
    },
    created() {

    },
    mounted() {
      eventBus['disabled'] = this.disabled
      this.data = this.range
      eventBus.$on('picker-cancel', () => {
        this.$emit('cancel')
      })
      eventBus.$on('onekit-picker-change-done', data => {
        this.$emit('change', data)
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