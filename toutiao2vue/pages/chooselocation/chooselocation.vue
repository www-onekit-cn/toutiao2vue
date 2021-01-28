<!--
 * @Autor: YeWei Wang
 * @Date: 2021-01-26 16:47:56
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-28 11:26:47
 * @Version: 1.0
 * @FilePath: \toutiao2vue\toutiao2vue\pages\chooselocation\chooselocation.vue
-->
<template>
  <iframe id="iframe" @load="iframe_load" style="width:100vw;height:100vh;" :src="url"></iframe>

</template>

<script>
  export default {
    name: "onekit-chooselocation",
    mounted() {

    },
    computed: {
      url() {
        const {
          longitude,
          latitude,
          zoom,
          keyword,
        } = this.$route.query
        let url = "https://m.amap.com/picker/?key=0c805d60efe6c4e05d13b93e4e48a129"
        if (longitude && latitude) {
          url += `&center=${longitude},${latitude}`
        }
        if (zoom) {
          url += `zoom=${zoom}`
        }
        if (keyword) {
          url += `keyword=${keyword}`
        }
        return url;
      }
    },
    methods: {
      iframe_load() {
        window.addEventListener("message", function (e) {
          console.log('您选择了:', e.data)
          const data = {
            errMsg: 'ok',
            name: e.data.name,
            location: e.data.location,
            address: e.data.address
          }
          this.$emit('chooselocation', data)
          this.$route.go(-1)
        }.bind(this), false);
        var iframe = document.getElementById('iframe').contentWindow;
        iframe.postMessage('hello', `https://m.amap.com/picker/`)


      }
    }

  };
</script>

<style>

</style>