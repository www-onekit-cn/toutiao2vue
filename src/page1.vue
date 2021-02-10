<template>
  <onekit-page id='app'>
    <onekit-view onekit-class="container">
      <onekit-view onekit-class="body body-space">
        <onekit-view onekit-class="page-section">
          <onekit-swiper :indicator-dots="indicatorDots" indicator-color="rgba(0, 0, 0, .3)" indicator-active-color="rgba(0, 0, 0, 1)" :current="0" current-item-id previous-margin next-margin :display-multiple-items="1" :autoplay="autoplay" :interval="interval" :circular="circular" :vertical="vertical" :duration="duration" @Animationfinish="animationFinish" @Transition="transition">
            <!-- <onekit-view> -->
            <onekit-swiper-item v-for="(item,index) in background" :key="index">
              <onekit-view :class="`onekit-swiper-item${item}`"></onekit-view>
            </onekit-swiper-item>
            <!-- </onekit-view> -->
          </onekit-swiper>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="ttui-cells">
            <onekit-view onekit-class="ttui-cell">
              <onekit-view onekit-class="ttui-cell__bd">指示点</onekit-view>
              <onekit-view onekit-class="ttui-cell__ft">
                <onekit-switch :checked="indicatorDots" @Change="changeIndicatorDots"></onekit-switch>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="ttui-cell">
              <onekit-view onekit-class="ttui-cell__bd">自动播放</onekit-view>
              <onekit-view onekit-class="ttui-cell__ft">
                <onekit-switch :checked="autoplay" @Change="changeAutoplay"></onekit-switch>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="ttui-cell">
              <onekit-view onekit-class="ttui-cell__bd">循环播放</onekit-view>
              <onekit-view onekit-class="ttui-cell__ft">
                <onekit-switch :checked="circular" @Change="changeCircular"></onekit-switch>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="ttui-cell">
              <onekit-view onekit-class="ttui-cell__bd">滑块放置方向是否为竖直</onekit-view>
              <onekit-view onekit-class="ttui-cell__ft">
                <onekit-switch :checked="vertical" @Change="changeVertical"></onekit-switch>
              </onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section page-section-space">
          <onekit-view onekit-class="page-section-title">
            <onekit-text>幻灯片切换时长(ms)</onekit-text>
            <onekit-text onekit-class="info"> {{ duration }} </onekit-text>
          </onekit-view>
          <onekit-slider @Change="durationChange" :min="500" :max="2000"></onekit-slider>
          <onekit-view onekit-class="page-section-title">
            <onekit-text>自动播放间隔时长(ms)</onekit-text>
            <onekit-text onekit-class="info"> {{interval}}</onekit-text>
          </onekit-view>
          <onekit-slider @Change="intervalChange"></onekit-slider>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <h2>{{ test }}</h2>
  </onekit-page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  // import { tt } from '../toutiao2vue/tt'
  export default OnekitPage({}, {
    data: {
      background: [
        'demo-text-1',
        'demo-text-2',
        'demo-text-3'
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      circular: false,
      interval: 2000,
      duration: 500,
      test: 1000
    },
    changeIndicatorDots: function () {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay: function () {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    changeCircular: function () {
      this.setData({
        circular: !this.data.circular
      })
    },
    changeVertical: function () {
      this.setData({
        vertical: !this.data.vertical
      })
    },
    intervalChange: function (e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange: function (e) {
      console.log(e)
      // this.setData({
      //   duration: e.detail.value
      // })
      console.log(this.duration)

      this.duration = e.detail.value
      this.test = 2000
      console.log(this.duration)
    },
    animationFinish: function (e) {
      console.log(e.detail)
    },
    transition: function (e) {
      console.log(e.detail)
    },
  })
</script>

<style>
  .onekit-swiper-itemdemo-text-1 {
    width: 100%;
    height: 100%;
    background: wheat;
  }

  .onekit-swiper-itemdemo-text-2 {
    width: 100%;
    height: 100%;
    background: pink;
  }

  .onekit-swiper-itemdemo-text-3 {
    width: 100%;
    height: 100%;
    background: cadetblue;
  }
</style>