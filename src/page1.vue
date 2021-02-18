<template>
  <onekit-page id='app'>
    <onekit-view onekit-class="page-body">
      <onekit-view onekit-class="page-section">
        <onekit-view onekit-class="page-section-title">
          <onekit-text>flex-direction: row\n横向布局</onekit-text>
        </onekit-view>
        <onekit-view onekit-class="flex-wrapper" onekit-style="flex-direction:row;">
          <onekit-view hover-class="hover-item" onekit-class="flex-item" onekit-style="background-color: #73d13d">A</onekit-view>
          <onekit-view hover-class="hover-item" onekit-class="flex-item" onekit-style="background-color: #13c2c2">B</onekit-view>
          <onekit-view hover-class="hover-item" onekit-class="flex-item" onekit-style="background-color: #40a9ff">C</onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view onekit-class="page-section">
        <onekit-view onekit-class="page-section-title">
          <onekit-text>flex-direction: column\n纵向布局</onekit-text>
        </onekit-view>
        <onekit-view onekit-class="flex-wrapper" onekit-style="flex-direction:column;">
          <onekit-view onekit-class="flex-item-v" onekit-style="background-color: #73d13d">A</onekit-view>
          <onekit-view onekit-class="flex-item-v" onekit-style="background-color: #13c2c2">B</onekit-view>
          <onekit-view onekit-class="flex-item-v" onekit-style="background-color: #40a9ff">C</onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  // import { tt } from '../toutiao2vue/tt'
  export default OnekitPage({}, {
    data: {
      interval: 2000,

    },
    onLoad() {}
  })
</script>

<style>
  .flex-wrapper {
    margin-top: calc(var(--screen-width)*20/750);
    display: flex;
    justify-content: center;
  }

  .flex-item {
    width: calc(var(--screen-width)*200/750);
    height: calc(var(--screen-width)*300/750);
    text-align: center;
    line-height: calc(var(--screen-width)*300/750);
    color: #fff;
  }

  .flex-item.hover-item {
    opacity: 0.6;
  }

  .flex-item-v {
    align-self: center;
    width: calc(var(--screen-width)*300/750);
    height: calc(var(--screen-width)*160/750);
    text-align: center;
    line-height: calc(var(--screen-width)*160/750);
    color: #fff;
  }
</style>