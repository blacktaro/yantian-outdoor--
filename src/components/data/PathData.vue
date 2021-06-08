<!--
 * @Description: 文件简介
 * @Date: 2021-05-31 11:21:44
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-03 17:44:03
-->
<template>
  <div class='summarize'>
    <div class="total-data">
      <div class="title">路径用户数据</div>
      <ul class="content">
        <li class="data-item">
          <div class="name">今天</div>
          <div class="num">{{summData.today}}</div>
        </li>
        <li class="data-item">
          <div class="name">昨天</div>
          <div class="num">{{summData.yesterday}}</div>
        </li>
        <li class="data-item">
          <div class="name">累计用户数</div>
          <div class="num">{{summData.all}}</div>
        </li>
      </ul>
    </div>
    <div class="echarts">
      <div class="title">用户增长情况</div>
      <div class="content">
        <the-chart
          :chart-id="'user-grow'"
          :chart-opt='userGrowChartOpt'
        ></the-chart>
      </div>
    </div>
    <div class="echarts">
      <div class="title">用户使用时长分布情况</div>
      <div class="content">
        <the-chart
          :chart-id="'user-time'"
          :chart-opt='userTimeChartOpt'
        ></the-chart>
      </div>
    </div>
  </div>
</template>

<script>
import TheChart from "../echarts/TheChart.vue";
import { onMounted, reactive, toRefs } from "vue";
import {
  qrySummarizeNum,
  qrySummarizeData,
  qryDurationData,
} from "../../api/path";
import getDoubleBarOpt from "../../composables/charts/doubleBarChartOpt";
import getPieOpt from "../../composables/charts/pieChartOpt";
export default {
  components: { TheChart },
  setup() {
    const params = {
      location: "area",
      id: 230108000000,
    };
    const state = reactive({
      summData: {},
      userGrowChartOpt: {},
      userTimeChartOpt: {},
    });
    // 获取总数
    const getSummarizeNum = () => {
      qrySummarizeNum(params).then((res) => {
        state.summData = res.data;
      });
    };
    // 获取用户总数
    const getUserSummarizeData = () => {
      qrySummarizeData(params).then((res) => {
        const chartOpt = {
          legend: ["使用人数", "使用人次 "],
          xData: [],
          y1Data: [],
          y2Data: [],
        };
        res.data.forEach((item) => {
          chartOpt.xData.push(item.title);
          chartOpt.y1Data.push(item.users);
          chartOpt.y2Data.push(item.times);
        });

        state.userGrowChartOpt = getDoubleBarOpt(chartOpt);
      });
    };
    // 用户时长
    const getUserTimeData = () => {
      qryDurationData(params).then((res) => {
        const chartOpt = {
          data: [],
        };
        res.data.forEach((item) => {
          chartOpt.data.push({ name: item.title, value: item.value });
        });
        state.userTimeChartOpt = getPieOpt(chartOpt);
      });
    };
    onMounted(() => {
      getSummarizeNum();
      getUserSummarizeData();
      getUserTimeData();
    });
    return {
      ...toRefs(state),
    };
  },
  data() {
    return {};
  },
};
</script>

<style lang='scss' scoped>
@import "./style.scss";
</style>
