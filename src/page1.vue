<!--
 * @Autor: YeWei Wang
 * @Date: 2021-01-14 13:53:32
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-29 14:21:49
 * @Version: 1.0
 * @FilePath: \toutiao2vue\src\page1.vue
-->
<template>
  <onekit-page id="app">

    <onekit-map></onekit-map>

  </onekit-page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  // import tt from '../toutiao2vue/tt'
  export default OnekitPage(null, {
    data: {
      src: 'http://vodkgeyttp8.vod.126.net/cloudmusic/9652/core/5965/ea1dc8b6835211f3ae695f48a3d27b1a.mp4?wsSecret=6308e4fbedd8712d0b632d09b96a5732&wsTime=1611911002'
    },
    test() {
      console.log('ok')
    }
  });
</script>

<style>

</style>