<!--
 * @Autor: YeWei Wang
 * @Date: 2021-01-14 13:53:32
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-28 18:25:11
 * @Version: 1.0
 * @FilePath: \toutiao2vue\src\page1.vue
-->
<template>
  <onekit-page id="app">

    <onekit-image :src="src" mode="widthFix">xxx</onekit-image>

  </onekit-page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  // import tt from '../toutiao2vue/tt'
  export default OnekitPage(null, {
    data: {
      src: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2612785265,3321984122&fm=26&gp=0.jpg'
    }
  });
</script>

<style>

</style>