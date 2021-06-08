<!--
 * @Description: 文件简介
 * @Date: 2021-05-31 11:21:44
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-04 14:32:09
-->
<template>
  <div class='summarize'>
    <div class="total-data">
      <div class="title">体测用户数据</div>
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
      <div class="title">体测设备用户数变化</div>
      <div class="content">
        <the-chart
          :chart-id="'user-grow'"
          :chart-opt='equNumChartOpt'
        ></the-chart>
      </div>
    </div>
    <div class="echarts">
      <div class="title">体测设备用户偏好情况</div>
      <div class="content">
        <the-chart
          :chart-id="'user-age'"
          :chart-opt='userLikeChartOpt'
        ></the-chart>
      </div>
    </div>
    <div class="echarts">
      <div class="title">用户BMI分布情况</div>
      <div class="content">
        <the-chart
          :chart-id="'user-bmi'"
          :chart-opt='userBMIChartOpt'
        ></the-chart>
      </div>
    </div>
    <div class="echarts">
      <div class="title">用户达标率变化情况</div>
      <div class="content">
        <the-chart
          :chart-id="'user-rate'"
          :chart-opt='userRateChartOpt'
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
  qryEquiptmentData,
  qryBMIData,
  qryMetabolismAge,
} from "../../api/test";
import getDoubleBarOpt from "../../composables/charts/doubleBarChartOpt";
import getRadarOpt from "../../composables/charts/radarChartOpt";
import getSingleLineOpt from "../../composables/charts/singleLineChartOpt";
export default {
  components: { TheChart },
  setup() {
    const params = {
      location: "area",
      id: 230108000000,
    };
    const state = reactive({
      summData: {},
      equNumChartOpt: {},
      userLikeChartOpt: {},
      userBMIChartOpt: {},
      userFatChartOpt: {},
      userRateChartOpt: {},
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
        state.equNumChartOpt = getDoubleBarOpt(chartOpt);
      });
    };
    // 获取用户偏好
    const getUserLikeData = () => {
      qryEquiptmentData(params).then((res) => {
        const chartOpt = {
          indicator: [],
          value: [],
        };
        res.data.forEach((item) => {
          chartOpt.value.push(+item.value);
        });
        const maxVal = chartOpt.value.reduce((a, b) => {
          return b > a ? b : a;
        });
        res.data.forEach((item) => {
          chartOpt.indicator.push({ name: item.name, max: maxVal * 1.3 });
        });
        state.userLikeChartOpt = getRadarOpt(chartOpt);
      });
    };
    // 获取BMi
    const getUserBMiData = () => {
      qryBMIData(params).then((res) => {
        const chartOpt = {
          legend: ["男性", "女性"],
          xData: [],
          y1Data: [],
          y2Data: [],
        };
        res.man.forEach((item) => {
          chartOpt.xData.push(item.title);
          chartOpt.y1Data.push(item.value);
        });
        res.woman.forEach((item) => {
          chartOpt.y2Data.push(item.value);
        });
        state.userBMIChartOpt = getDoubleBarOpt(chartOpt);
      });
    };
    // 获取达标率
    const getUserMetabolismData = () => {
      qryMetabolismAge(params).then((res) => {
        const chartOpt = {
          legend: ["用户达标率"],
          xData: [],
          yData: [],
        };
        res.data.forEach((item) => {
          chartOpt.xData.push(item.title);
          chartOpt.yData.push(item.value);
        });
        state.userRateChartOpt = getSingleLineOpt(chartOpt);
      });
    };
    onMounted(() => {
      getSummarizeNum();
      getUserSummarizeData();
      getUserLikeData();
      getUserBMiData();
      getUserMetabolismData();
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
