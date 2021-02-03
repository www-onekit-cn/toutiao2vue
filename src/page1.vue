<template>
  <onekit-page id="app">
    <onekit-radio-group @change="click">
      <onekit-label class="radio">
        <onekit-radio color="#000" value="王野未" /> 王野未
      </onekit-label>
      <onekit-label class="radio">
        <onekit-radio color="#000" value="水原希子" /> 水原希子
      </onekit-label>
      <onekit-label class="radio">
        <onekit-radio color="#000" value="小彭同学" /> 小彭同学
      </onekit-label>
    </onekit-radio-group>




  </onekit-page>

</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  // import tt from '../toutiao2vue/tt'
  export default OnekitPage({}, {
    onLoad() {

    },
    click(e) {
      console.log(e)
    }
  })
</script>

<style>
  #app {
    height: 100vh;
    width: 100vw;
  }
</style>