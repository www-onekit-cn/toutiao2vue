<template>
  <onekit-page id="app">
    <onekit-canvas canvas-id="my-canvas"></onekit-canvas>
  </onekit-page>

</template>

<script>
  //import OnekitPage from '../toutiao2vue/OnekitPage';
  import tt from '../toutiao2vue/tt'
  export default {
    mounted() {
      const { devicePixelRatio } = tt.getSystemInfoSync();
      const canvasCtx = tt.createCanvasContext('my-canvas')
      // 画布尺寸初始值同组件大小，放到手机屏幕后相当于将初始大小的画布放大为手机屏幕比例
      // 因此使用画布前需要将画布设置为手机屏幕相同比例
      console.log(devicePixelRatio)
      canvasCtx.width *= devicePixelRatio;
      canvasCtx.height *= devicePixelRatio;
      // 同时需要缩放画布 x，y 方向尺寸
      canvasCtx.scale(devicePixelRatio, devicePixelRatio);
      canvasCtx.clearRect(0, 0, 300, 225);

      canvasCtx.fillStyle = this.data.color;
      canvasCtx.font = "30px sans-serif";
      canvasCtx.fillText("ByteDance canvas", 0, 30);
    }
  };
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