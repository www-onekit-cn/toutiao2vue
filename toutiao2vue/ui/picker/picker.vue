<template>
  <div
       :class="['onekit-picker',onekitClass]"
       :style="onekitStyle"
       :id="onekitId"
       @click.stop="showPicker">
    <div class="cover" v-show="this.show == 40"></div>
    <ul class="picker-context"
        :style="{'height': show + '%',}">
      <div class="title">
        <div class="left" @click.stop="_picker_hide">取消</div>
        <div class="right">确认</div>
      </div>
      <div class="item-list">
        <div class="selected-line"></div>
        <div class="item-list-scroll"
             @touchmove="touching"
             @touchstart="touchstart"
             @touchend="touchend"
             :style="{'top': scrollTop + '%'}">
          <li v-for="(item, index) in range"
              :key="index">
            {{ item }}
          </li>
        </div>
      </div>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-picker",
    data: () => ({ show: 0, scrollTop: 0, touchStart: 0 }),
    mixins: [toutiao_behavior, onekit_behavior],
    props: {
      mode: {
        type: String,
        default: 'selector',
      },
      disabled: {
        type: Boolean,
        default: false
      },
      range: Array
    },
    methods: {
      showPicker() {
        if (this.disabled) return
        this.show = 40
      },
      _picker_hide() {
        this.show = 0
        this.$emit('cancel')
      },
      touching(e) {
        // console.log('touching', (window.screen.availHeight / e.changedTouches[0].clientY).toFixed(2))
        let touchingPosition = (window.screen.availHeight / e.changedTouches[0].clientY).toFixed(2)
        const foo = (touchingPosition - this.touchStart).toFixed(2)
        // this.scrollTop = (this.touchStart * 10).toFixed(2)
        console.log(foo)

        this.scrollTop = foo * -100


      },
      touchstart(e) {
        // console.log('touchstart', (window.screen.availHeight / e.changedTouches[0].clientY).toFixed(2))
        this.touchStart = (window.screen.availHeight / e.changedTouches[0].clientY).toFixed(2)
      },
      touchend() {
        // this.scrollTop = 0
      }
    }
  }
</script>

<style>
  .onekit-picker {
    height: 20px;
  }

  .cover {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    position: absolute;
    /* z-index: 9999 !important; */
  }

  .picker-context {
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0;
    background: #fff;
    transition: .15s height;
    overflow: hidden;
  }

  .picker-context .title {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    color: #0abde3;
  }

  .picker-context .title .left {
    flex: 1;
    text-align: left;
    margin: 6px 0 6px 12px;
  }

  .picker-context .title .right {
    flex: 1;
    text-align: right;
    margin: 6px 12px 6px 0;
  }

  .picker-context .item-list {
    overflow: hidden;
    height: 100%;
    text-align: center;
    /* padding-top: 15%; */
    position: relative;
  }

  .picker-context .item-list .item-list-scroll {
    padding-top: 15%;
    /* border: 1px solid red; */
    width: 100%;
    position: absolute;
    /* text-align: center; */
    height: 100%;
    /* transition: .25s all ease; */
  }

  .picker-context .item-list .item-list-scroll li {
    font-size: 15px;
    font-weight: 400;
    margin-top: 6px;
  }

  .selected-line {
    height: 1px;
    width: 100%;
    /* border: 1px solid red; */
    background: #000;
    position: absolute;
    top: 40%;
  }
</style>