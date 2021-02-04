<template>
  <div
       :class="['onekit-picker',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <div class="selector" v-if="mode === 'selector'">
      <selector :column="'1'" :data="data" />
      <slot></slot>
    </div>

    <div class="multiselector" v-if="mode === 'multiSelector'">
      <multiselector :column="'1'" :data="data"></multiselector>
      <slot></slot>
    </div>

    <div class="timeselector" v-if="mode === 'time'">

    </div>

    <div class="dateselector" v-if="mode === 'date'">

    </div>

    <div class="regionselector" v-if="mode === 'region'">
      <region :column="'3'" :data="data"></region>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import selector from './_/selector-picker/selector'
  import region from './_/region-picker/region'
  import multiselector from './_/mutiselector-picker/multiselector'
  import city_list from './_/region-picker/city-data.json'
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
      selector,
      region,
      multiselector
    },
    created() {

    },
    mounted() {
      eventBus['disabled'] = this.disabled
      if (this.mode === 'region') {
        this.data = city_list
      } else {
        this.data = this.range
      }
      eventBus.$on('picker-cancel', () => {
        this.$emit('Cancel')
      })
      switch (this.mode) {
      case 'selector':
        eventBus.$on('onekit-picker-change-done', data => {
          this.$emit('Change', data)
        })
        break
      case 'region':
        eventBus.$on('onekit-region-picker-change-done', data => {
          this.$emit('Change', data)
        })
        break
      default:
        return
      }

    }
  }
</script>

<style>
  .onekit-picker {
    position: relative;
    width: 100%;
  }
</style>