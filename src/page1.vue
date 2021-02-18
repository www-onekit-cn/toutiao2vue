<template>
  <onekit-page id='app'>
    <onekit-view onekit-class="container">
      <onekit-view onekit-class="header header-center">
        <onekit-image onekit-class="index-logo"
                      src="../../image/category/logo.png"></onekit-image>
        <onekit-view onekit-class="index-desc">以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见文档。</onekit-view>
      </onekit-view>

      <onekit-view onekit-class="body body-space">
        <onekit-view onekit-class="category-list">
          <onekit-view v-for="(item,index) in list"
                       :key="index"
                       :onekit-class="'category-list__item '+(item.open ? 'category-list__item--open': '')">
            <onekit-view onekit-class="ttui-flex item-title"
                         :data-index="index"
                         @Tap="toggleSwitch">
              <onekit-view onekit-class="ttui-flex__item">{{item.name}}</onekit-view>
              <onekit-image onekit-class="item-list__img"
                            src="../../image/category/arrow.png"></onekit-image>
            </onekit-view>
            <onekit-view onekit-class="item-list">
              <onekit-view v-for="(page,index) in item.pages"
                           :key="index"
                           onekit-class="item-list__page">
                <onekit-navigator :url="page.path"
                                  onekit-class="item-navigator">
                  <onekit-view onekit-class="ttui-flex navigator-wraper">
                    <onekit-view onekit-class="ttui-flex__item">{{page.name}}</onekit-view>
                    <onekit-image onekit-class="item-list__img"
                                  src="../../image/category/setting_arrow.png"></onekit-image>
                  </onekit-view>
                </onekit-navigator>
              </onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view onekit-class="footer">
      </onekit-view>
    </onekit-view>
  </onekit-page>
</template>
<script>
const ONEKIT_JSON = null
import OnekitPage  from '../toutiao2vue/OnekitPage';
//import tt  from '../toutiao2vue/tt';
export default OnekitPage(ONEKIT_JSON, {
  data: {
    list: [
      {
        "name": "视图容器",
        "open": false,
        "pages": [
          {
            "name": "基础视图 view",
            "path": "view/view"
          },
          {
            "name": "可滚动视图区域 scroll-view",
            "path": "scroll-view/scroll-view"
          },
          {
            "name": "滑块视图容器 swiper",
            "path": "swiper/swiper"
          }
        ]
      },
      {
        "name": "基础内容",
        "open": false,
        "pages": [
          {
            "name": "文本 text",
            "path": "text/text"
          },
          {
            "name": "进度条 progress",
            "path": "progress/progress"
          },
          {
            "name": "图标 icon",
            "path": "icon/icon"
          },
          {
            "name": "富文本 rich-text",
            "path": "rich-text/rich-text"
          }
        ]
      },
      {
        "name": "表单组件",
        "open": false,
        "pages": [
          {
            "name": "按钮 button",
            "path": "button/button"
          },
          {
            "name": "多项选择器 checkbox",
            "path": "checkbox/checkbox"
          },
          {
            "name": "表单 form",
            "path": "form/form"
          },
          {
            "name": "输入框 input",
            "path": "input/input"
          },
          {
            "name": "表单组件标签 label",
            "path": "label/label"
          },
          {
            "name": "底部弹起的滚动选择器 picker",
            "path": "picker/picker"
          },
          {
            "name": "滚动选择器 picker-view",
            "path": "picker-view/picker-view"
          },
          {
            "name": "单项选择器 radio",
            "path": "radio/radio"
          },
          {
            "name": "滑动选择器 slider",
            "path": "slider/slider"
          },
          {
            "name": "开关选择器 switch",
            "path": "switch/switch"
          },
          {
            "name": "多行输入框 textarea",
            "path": "textarea/textarea"
          }
        ]
      },
      {
        "name": "导航",
        "open": false,
        "pages": [
          {
            "name": "页面导航 navigator",
            "path": "navigator/navigator"
          }
        ]
      },
      {
        "name": "媒体组件",
        "open": false,
        "pages": [
          {
            "name": "图片 image",
            "path": "image/image"
          },
          {
            "name": "视频 video",
            "path": "video/video"
          },
          {
            "name": "实时视频播放器 live-player",
            "path": "live-player/live-player"
          }
        ]
      },
      {
        "name": "画布",
        "pages": [
          {
            "name": "画布 canvas",
            "path": "canvas/canvas"
          }
        ]
      },
      {
        "name": "开放能力",
        "pages": [
          {
            "name": "网页容器 webview",
            "path": "webview/webview"
          },
          {
            "name": "广告 ad",
            "path": "ad/ad"
          },
          {
            "name": "消息推送客服 contact",
            "path": "custom-message/custom-message"
          },
          {
            "name": "获取手机号 get-phone-number",
            "path": "get-phone-number/get-phone-number"
          }
        ]
      }
    ]
  },
  toggleSwitch: function (e) {
    var { index } = e.currentTarget.dataset
    var { list } = this.data
    this.setData({
      list: list.map((item, idx) => {
        item.open = idx == index ? !item.open : false
        return item
      })
    })
  }
})
</script>
<style>
.category-list__item {
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 4px;
}
.item-title {
  font-size: 17px;
  color: #222222;
  padding: 15px;
  height: 26px;
}
.category-list__item--open .item-title {
  transition: 0.3s;
  color: #999999;
}
.category-list__item--open .item-title .item-list__img {
  transform: rotate(180deg);
}
.category-list__item--open .item-list {
  height: auto;
}
.category-list__item--open .item-list__page {
  transition: 0.3s;
  transform: translateY(0);
}
.item-list {
  height: 0;
  overflow: hidden;
}
.item-list__page {
  transform: translateY(-50%);
}
.item-list__page:last-child {
  border-bottom: none;
}
.navigator-wraper {
  padding: 11px 15px 11px 0;
  border-bottom: 1px solid #f8f8f8;
}
.item-navigator {
  font-size: 16px;
  color: #222222;
  padding-left: 15px;
}
.item-title__img {
  width: 30px;
  height: 30px;
}
.item-list__img {
  width: calc(var(--screen-width) * 48 / 750);
  height: calc(var(--screen-width) * 48 / 750);
  display: inline-block;
}
.ttui-flex {
  align-items: center;
}
</style>
