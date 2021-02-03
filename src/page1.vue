<template>
  <onekit-page id="app">

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