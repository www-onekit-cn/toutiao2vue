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
          <onekit-view onekit-class="category-title">type</onekit-view>
          <onekit-button type="primary">页面主操作 Normal</onekit-button>
          <onekit-button type="primary" loading>页面主操作 Loading</onekit-button>
          <onekit-button type="primary" :disabled="true">页面主操作 Disabled</onekit-button>
          <onekit-button type="default">页面次要操作 Normal</onekit-button>
          <onekit-button type="default" :loading="true">页面次要操作 Loading</onekit-button>
          <onekit-button type="default" :disabled="true">页面次要操作 Disabled</onekit-button>
        </onekit-view>
        <onekit-view onekit-class="button-category">
          <onekit-view onekit-class="category-title">size</onekit-view>
          <onekit-view onekit-class="mini-buttons">
            <onekit-button onekit-class="mini-btn" type="primary" size="mini">按钮</onekit-button>
            <onekit-button onekit-class="mini-btn" type="default" size="mini">按钮</onekit-button>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="button-category">
          <onekit-view onekit-class="category-title">form-type</onekit-view>
          <onekit-form @submit="submit" @reset="reset">
            <onekit-button form-type="submit" type="primary">submit</onekit-button>
            <onekit-button form-type="reset" type="default">reset</onekit-button>
          </onekit-form>
        </onekit-view>
        <onekit-view onekit-class="button-category">
          <onekit-view onekit-class="category-title">open-type</onekit-view>
          <onekit-button open-type="share" type="primary">share</onekit-button>
          <onekit-button open-type="getPhoneNumber" type="default">getPhoneNumber</onekit-button>
          <onekit-view onekit-class="page-section-title page-section-title-space">
            提示: 获取用户绑定的手机号。需要用户主动通过 button 组件的点击来触发后才能发起获取手机号接口。（仅企业主体小程序可使用，且需要申请审核。）
          </onekit-view>
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