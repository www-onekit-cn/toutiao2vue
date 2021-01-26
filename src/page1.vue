<!--
 * @Autor: YeWei Wang
 * @Date: 2021-01-14 13:53:32
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-26 16:50:50
 * @Version: 1.0
 * @FilePath: \toutiao2vue\src\page1.vue
-->
<template>
  <onekit-page id="app">

    <onekit-text>xxx</onekit-text>

  </onekit-page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  import tt from '../toutiao2vue/tt'
  export default OnekitPage(null, {

    data: {
      tempFilePath: '',
      origintempFilePath: ''
    },
    onLoad() {
      tt.chooseLocation({})
    }




  });
</script>

<style>

</style>