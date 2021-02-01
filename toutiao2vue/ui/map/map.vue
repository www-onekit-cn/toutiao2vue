<template>
  <div
       :class="['onekit-map',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <el-amap
             class="amap-box"
             vid="amap-vue"
             :center="center"
             :zoom="scale - 1">
      <el-amap-marker v-for="(m, i) in tt_position"
                      :key="i"
                      :position="m.position">
      </el-amap-marker>
    </el-amap>
    <slot></slot>
  </div>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import Vue from 'vue'
  import VueMap from 'vue-amap'
  Vue.use(VueMap)
  VueMap.initAMapApiLoader({
    key: '0c805d60efe6c4e05d13b93e4e48a129',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
  })
  const optionsAPI = {
    name: "onekit-map",
    mixins: [toutiao_behavior, onekit_behavior],
    data() {
      return {}
    },
    props: {
      longitude: {
        type: Number,
        required: true
      },
      latitude: {
        type: Number,
        required: true
      },
      scale: {
        type: Number,
        default: 16
      },
      markers: Array,
      circles: Array,
      'show-location': {
        type: Boolean,
        default: false
      },
      polyline: Array,
      'include-points': Array
    },
    mounted() {},
    computed: {
      center() {
        return [this.longitude, this.latitude]
      },
      tt_position() {
        let tt_position = []
        for (let key in this.markers) {
          const longitude = this.markers[key].longitude
          const latitude = this.markers[key].latitude
          const position = [longitude, latitude]
          let obj = {}
          obj[`position`] = position
          tt_position.push(obj)
        }
        return tt_position
      }
    }
  }
  export default optionsAPI
</script>

<style>
  .onekit-map {
    width: 100%;
  }
</style>