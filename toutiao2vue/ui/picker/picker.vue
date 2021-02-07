<template>
  <div
       :class="['onekit-picker',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <div class="selector" v-if="mode === 'selector'">
      <selector :column="'1'" :data="data" />
      <slot></slot>
    </div>

    <div class="multiselector" v-if="mode === 'multiSelector' && this.childData">
      <multiselector :column="'3'" :data="data"></multiselector>
      <slot></slot>
    </div>

    <div class="timeselector" v-if="mode === 'time'">
      <timeComponent :column="'2'" :data="data"></timeComponent>
      <slot></slot>
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
  import timeComponent from './_/time-picker/time'
  // import time_list from './_/time-picker/time.json'
  import { eventBus } from '../../eventBus'
  export default {
    name: "onekit-picker",
    data() {
      return {
        data: '',
        reldata: [],
        childData: true,
        newRange: []
      }
    },
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
        // type: Number || Array,
        default: 0
      }
    },
    components: {
      selector,
      region,
      multiselector,
      timeComponent
    },
    created() {

    },
    mounted() {
      eventBus['disabled'] = this.disabled
      if (this.mode === 'region') {
        this.data = city_list
      } else if (this.mode === 'time') {
        let time_lists = []
        for (let i = 1; i <= 24; i++) {
          let time_listHouers = {}
          time_listHouers['time'] = i
          time_listHouers['children'] = []
          for (let j = 1; j <= 60; j++) {
            let time_listSecond = {}
            time_listSecond['time'] = j
            time_listHouers['children'].push(time_listSecond)
          }
          time_lists.push(time_listHouers)
        }


        this.data = time_lists
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
      case 'multiSelector':
        eventBus.$on('onekit-mutiPicker-changeend', data => {
          this.newRange = this.range
          eventBus.$emit('mutirangeChange', this.newRange)
          this.$emit('Columnchange', data)
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