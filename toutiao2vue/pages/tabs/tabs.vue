<template>
  <div id="app" style="height:100%;display:flex; flex-direction:column;">
    <router-view @updatewindowjson="tabPage_updateWindowJson" @switchtab="tabPage_switchTab" style="flex-grow:2;overflow:scroll;" />
    <div class="tab-bar">
      <span :ref="tab.url" v-for="tab in tabs" class="item" @click="tab_click(tab.url)" :key="tab.pagePath">
        <img :src="$route.path.includes(tab.url) ? tab.selected : tab.normal" alt />
        <span :class="{active:$route.path.includes(tab.url)}">{{tab.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import PATH from "oneutil/PATH";
  import OneKit from "../../js/OneKit";
  let APP_JSON;
  export default {
    name: "onekit-tabs",
    methods: {
      tab_click(path) {
        this.$router.replace(path);
      },
      tabPage_updateWindowJson({ WINDOW_JSON }) {
        this.$emit('updatewindowjson', { WINDOW_JSON });
      },
      tabPage_switchTab({ url }) {
        url = "/" + PATH.rel2abs(OneKit.currentUrl(), url)
        this.$refs[url][0].click();
      }
    },
    data() {
      return {
        tabs: [],
      };
    },
    created() {
      APP_JSON = Vue.prototype.APP_JSON;
    },
    mounted() {
      let data = [];
      for (let tab of APP_JSON.tabBar.list) {
        data.push({
          name: tab.text,
          url: `/${tab.pagePath}`,
          normal: `/${tab.iconPath}`,
          selected: `/${tab.selectedIconPath}`,
        });
      }
      Vue.set(this, "tabs", data);
    },
  };
</script>

<style scoped="scoped">
  body {
    display: flex;
    flex-direction: column;
  }

  #app {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    position: relative;
  }

  .tab-bar {
    height: 56px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    border-top: 1px solid #eee;
  }

  .tab-bar .item {
    display: flex;
    font-size: 12px;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #000;
  }

  .tab-bar .item span.active {
    color: #eb476d;
  }

  .tab-bar .item img {
    width: 28px;
  }
</style>