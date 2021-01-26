<!--
 * @Autor: YeWei Wang
 * @Date: 2021-01-26 16:47:56
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-26 18:01:54
 * @Version: 1.0
 * @FilePath: \toutiao2vue\toutiao2vue\pages\chooselocation\chooselocation.vue
-->
<template>
  <iframe id="iframe"></iframe>

</template>

<script>
  export default {
    name: "onekit-chooselocation",
    mounted() {
      const {
        longitude,
        latitudes
      } = this.$route.query
      //////////////////////////////
      console.log("xxx")
      let url = `https://m.amap.com/picker/?`
      if (longitude && latitudes) {
        url += `&center=${longitude},${latitudes}`
      }
      //
      var iframe = document.getElementById('test').contentWindow
      document.getElementById('test').onload = function () {
        iframe.postMessage('hello', url)
      };
      window.addEventListener("message", function (e) {
        alert('您选择了:' + e.data.name + ',' + e.data.location)
      }, false);

    }
  };
</script>

<style>

</style>