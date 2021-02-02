<template>
  <onekit-page id="app">
    <!-- <onekit-canvas canvas-id="my-canvas"></onekit-canvas> -->
    <onekit-textarea value="hello world"></onekit-textarea>
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