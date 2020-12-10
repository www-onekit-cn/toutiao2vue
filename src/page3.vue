<template>
  <page id="app">
    <onekit-view onekit-class="btn-area">


      <onekit-view @Tap="getSystemInfo()"
                   onekit-class='test_children success'>
        getSystemInfo
      </onekit-view>

      <onekit-view onekit-class="test_title">navigate组件type</onekit-view>

      <onekit-navigator onekit-class='test_children success'
                        url="page2"
                        open-type='navigate'>
        navigate
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children success'
                        url="page2"
                        open-type='redirect'>
        redirect
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children success'
                        url="page2"
                        open-type='switchTab'>
        switchTab
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children success'
                        url="page2"
                        open-type='reLaunch'>
        reLaunch
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children success'
                        delta='1'
                        open-type='navigateBack'>
        navigateBack
      </onekit-navigator>

      <onekit-navigator onekit-class='test_children success'
                        url="page2"
                        open-type='exit'>
        exit
      </onekit-navigator>
      <onekit-view onekit-class="test_title">界面API</onekit-view>
      <onekit-view @Tap="showToast()"
                   onekit-class='test_children success'>
        showToast
      </onekit-view>
      <onekit-view @Tap="showModal()"
                   onekit-class='test_children success'>
        showModal
      </onekit-view>
      <onekit-view @Tap="showLoading()"
                   onekit-class='test_children wrong'>
        showLoading
      </onekit-view>
      <onekit-view @Tap="showActionSheet()"
                   onekit-class='test_children success'>
        showActionSheet
      </onekit-view>
      <onekit-view @Tap="hideToast()"
                   onekit-class='test_children success'>
        hideToast
      </onekit-view>
      <onekit-view @Tap="hideLoading()"
                   onekit-class='test_children success'>
        hideLoading
      </onekit-view>

      <onekit-view @Tap="enableAlertBeforeUnload()"
                   onekit-class='test_children err'>
        enableAlertBeforeUnload
      </onekit-view>

      <onekit-view @Tap="disableAlertBeforeUnload()"
                   onekit-class='test_children err'>
        disableAlertBeforeUnload
      </onekit-view>

      <onekit-view onekit-class="test_title">导航栏API</onekit-view>

      <onekit-view @Tap="showNavigationBarLoading()"
                   onekit-class='test_children err'>
        showNavigationBarLoading
      </onekit-view>

      <onekit-view @Tap="setNavigationBarTitle"
                   onekit-class="test_children success">
        setNavigationBarTitle
      </onekit-view>

      <onekit-view @Tap="setNavigationBarColor"
                   onekit-class="test_children">
        setNavigationBarColor
      </onekit-view>
    </onekit-view>

  </page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  import tt from '../toutiao2vue/tt'
  export default OnekitPage({}, {
    onLoad: function(options) {
      this.setData({
        title: options.title
      })
      tt.showLoading({
        title: '加载中',
      })

      setTimeout(function() {
        tt.hideLoading()
      }, 2000)

    },
    showToast() {
      tt.showToast({
        title: '成功',
        icon: 'success',
        duration: 20000
      })
    },
    showModal() {
      tt.showModal({
        title: '提示',
        content: '这是一个模态弹窗',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    showLoading() {
      tt.showLoading({
        title: '加载中',
      })
    },
    showActionSheet() {
      tt.showActionSheet({
        itemList: ['A', 'B', 'C'],
        success(res) {
          console.log(res.tapIndex)
        },
        fail(res) {
          console.log(res.errMsg)
        }
      })
    },
    hideToast() {
      tt.hideToast()
    },
    hideLoading() {
      tt.hideLoading()
    },
    enableAlertBeforeUnload() {
      tt.enableAlertBeforeUnload()
    },
    disableAlertBeforeUnload() {
      tt.disableAlertBeforeUnload()
    },
    showNavigationBarLoading() {
      tt.showNavigationBarLoading()
    },
    setNavigationBarTitle() {
      tt.setNavigationBarTitle({
        title: '王野未的DEMO'
      })
    },
    setNavigationBarColor() {
      tt.setNavigationBarColor({
        frontColor: '#f12',
        backgroundColor: '#000'
      })
    },
    getSystemInfo() {
      tt.getSystemInfo({
        success(res) {
          console.log(res.model)
          console.log(res.system)
          console.log(res.platform)
          // console.log(res.brand)
          // console.log(res.statusBarHeight)
          // console.log(res.version)
          // console.log(res.fontSizeSetting)
          // console.log(res.SDKVersion)
          // console.log(res.benchmarkLevel)
          // console.log(res.language)
          // console.log(res.windowWidth)
          // console.log(res.windowHeight)
          // console.log(res.pixelRatio)
          // console.log(res.screenWidth)
          // console.log(res.screenHeight)
          // console.log(res.errMsg)
        }
      })
    }
  })
</script>

<style>

</style>