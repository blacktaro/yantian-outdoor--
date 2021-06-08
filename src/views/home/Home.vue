<!--
 * @Description: 文件简介
 * @Date: 2021-05-31 10:29:22
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-01 14:36:47
-->
<template>
  <div class='home'>
    <div class="location">
      <van-icon
        name="location"
        size='18'
        color="#38D4BC"
      />
      <span class="txt">哈尔滨平房区</span>
    </div>
    <ul class="nav-bar">
      <li
        class="nav-item"
        :class="{active:curtTab === item.id}"
        v-for="item in navLists"
        :key="item.id"
        @click="handleClickNav(item)"
      >{{item.txt}}</li>
    </ul>
    <div>
      <keep-alive>
        <component :is="curtTab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SummarizeData from "../../components/data/SummarizeData.vue";
import TestData from "../../components/data/TestData.vue";
import SportData from "../../components/data/SportData.vue";
import PathData from "../../components/data/PathData.vue";

import { Icon } from "vant";
import { reactive, toRefs } from "vue";
export default {
  components: {
    [Icon.name]: Icon,
    SummarizeData,
    TestData,
    SportData,
    PathData,
  },
  setup() {
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
  data() {
    return {
      navLists: [
        {
          id: "summarizeData",
          txt: "汇总",
          active: true,
        },
        {
          id: "testData",
          txt: "体测",
          active: false,
        },
        {
          id: "sportData",
          txt: "运动",
          active: false,
        },
        {
          id: "pathData",
          txt: "路径",
          active: false,
        },
      ],
      curtTab: "summarizeData",
    };
  },

  methods: {
    handleClickNav(item) {
      this.curtTab = item.id;
    },
  },
};
</script>

<style lang='scss' scoped>
.home {
  padding: 10px;
  background-color: #f5f5f5;
  .location {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
    line-height: 40px;
    .txt {
      margin-left: 5px;
    }
  }
  .nav-bar {
    height: 44px;
    display: flex;
    margin-bottom: 15px;
    background-color: #fff;
    border-radius: 4px;
    font-size: 16px;
    .nav-item {
      flex: 1;
      line-height: 44px;
      text-align: center;
    }
    .active {
      color: #fff;
      background-color: #38d4bc;
      border-radius: 4px;
    }
  }
}
</style>
