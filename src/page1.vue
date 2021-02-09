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
    <onekit-view onekit-class="container">
      <onekit-view onekit-class="body body-space">

        <onekit-view onekit-class="button-category">
          <onekit-view onekit-class="category-title">form-type</onekit-view>
          <onekit-form @submit="submit" @reset="reset">
            <onekit-button form-type="submit" type="primary">submit</onekit-button>
            <onekit-button form-type="reset" type="default">reset</onekit-button>
          </onekit-form>
        </onekit-view>

      </onekit-view>
    </onekit-view>

  </onekit-page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  import { tt } from '../toutiao2vue/tt'
  export default OnekitPage({}, {
    submit: function () {
      tt.showToast({
        title: "submit success"
      })
    },
    reset: function () {
      tt.showToast({
        title: "reset success"
      })
    }
  })
</script>

<style>

</style>