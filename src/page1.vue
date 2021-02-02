<template>
  <onekit-page id="app">
    <onekit-canvas canvas-id="my-canvas"></onekit-canvas>
  </onekit-page>

</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  import tt from '../toutiao2vue/tt'
  export default OnekitPage({}, {
    onLoad() {
      const { pixelRatio } = tt.getSystemInfoSync()
      const canvasCtx = tt.createCanvasContext('my-canvas')
      canvasCtx.width *= pixelRatio
      canvasCtx.height *= pixelRatio
      // 同时需要缩放画布 x，y 方向尺寸
      canvasCtx.scale(pixelRatio, pixelRatio)
      canvasCtx.clearRect(0, 0, 300, 225)

      // canvasCtx.fillStyle = this.data.color;
      canvasCtx.font = "30px sans-serif"
      canvasCtx.fillText("ByteDance canvas", 0, 30)
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