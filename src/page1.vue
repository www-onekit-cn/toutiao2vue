<template>
  <onekit-page id="app">
    <onekit-label class="radio">
      <onekit-radio /> 选择
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