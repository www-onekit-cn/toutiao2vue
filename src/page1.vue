<template>
  <onekit-page id='app'>
    <!-- <onekit-form>

      <onekit-input></onekit-input>

      <onekit-switch></onekit-switch>

      <onekit-checkbox-group name="checkbox">
        <onekit-label>
          <onekit-checkbox value="checkbox1" />选项一</onekit-label>
        <onekit-label>
          <onekit-checkbox value="checkbox2" />选项二</onekit-label>
      </onekit-checkbox-group>
      <onekit-slider :value="50" name="slider" show-value></onekit-slider>

    </onekit-form> -->
    <onekit-button type="primary" :loading="loading">button</onekit-button>
    <onekit-button size="mini">button</onekit-button>
    <onekit-button disabled>button</onekit-button>
    <onekit-button loading type="primary">button</onekit-button>

  </onekit-page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  export default OnekitPage({}, {
    data: {
      loading: false
    },
    onLoad() {
      console.log(this.loading)
      setTimeout(() => {
        this.loading = true
        console.log(this.loading)
      }, 3000);
    }
  })
</script>

<style>

</style>