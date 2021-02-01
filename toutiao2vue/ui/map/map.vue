<template>
  <div
       :class="['onekit-map',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <el-amap
             class="amap-box"
             vid="amap-vue">
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
  export default {
    name: "onekit-map",
    mixins: [toutiao_behavior, onekit_behavior],
    props: {


    },
    methods: {

    }
  }
</script>

<style>
</style>