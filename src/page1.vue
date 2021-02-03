<template>
  <onekit-page id="app">
    <onekit-label class="radio">
      <onekit-radio color="#000" value="王野未" /> 选择
    </onekit-label>
    <onekit-label class="radio">
      <onekit-radio checked disabled /> 选择
    </onekit-label>
    <onekit-label class="radio">
      <onekit-radio disabled /> 选择
    </onekit-label>
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
</style>