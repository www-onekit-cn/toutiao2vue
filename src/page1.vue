<template>
  <onekit-page id="app">
    <!-- <onekit-canvas canvas-id="my-canvas"></onekit-canvas> -->
    <onekit-slider :block-size="19"
                   block-color="#833471"
                   background-color="#12CBC4">
    </onekit-slider>
  </onekit-page>

</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  // import tt from '../toutiao2vue/tt'
  export default OnekitPage({}, {
    onLoad() {

    }
  })
</script>

<style>
  #app {
    height: 100vh;
    width: 100vw;
  }

  .view {
    width: 100%;
    height: 200px;
    display: block;
    color: #fff;
    text-align: center;
    justify-content: center;
    line-height: 200px;
    font-size: 24px;
  }

  .view1 {
    background: #000;
  }

  .view2 {
    background: #f12;
  }

  .view3 {
    background: violet;
  }
</style>