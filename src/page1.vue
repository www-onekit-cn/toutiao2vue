<template>
  <onekit-page id='app'>

    <onekit-text onekit-class="info"> {{interval}} </onekit-text>

  </onekit-page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  // import { tt } from '../toutiao2vue/tt'
  export default OnekitPage({}, {
    data: {
      interval: 2000,

    },
    onLoad() {}
  })
</script>

<style>
  .onekit-swiper-itemdemo-text-1 {
    width: 100%;
    height: 100%;
    background: wheat;
  }

  .onekit-swiper-itemdemo-text-2 {
    width: 100%;
    height: 100%;
    background: pink;
  }

  .onekit-swiper-itemdemo-text-3 {
    width: 100%;
    height: 100%;
    background: cadetblue;
  }
</style>