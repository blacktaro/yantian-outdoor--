<!--
 * @Description: 文件简介
 * @Date: 2021-05-31 11:21:44
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-03 16:07:07
-->
<template>
  <div class='summarize'>
    <div class="total-data">
      <div class="title">用户汇总数据</div>
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
          <div class="name">最近7天</div>
          <div class="num">{{summData.d7}}</div>
        </li>
        <li class="data-item">
          <div class="name">最近30天</div>
          <div class="num">{{summData.d30}}</div>
        </li>
        <li class="data-item">
          <div class="name">最近一年</div>
          <div class="num">{{summData.d365}}</div>
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
      <div class="title">用户年龄分布情况</div>
      <div class="content">
        <the-chart
          :chart-id="'user-age'"
          :chart-opt='userAgeChartOpt'
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
  qrySummarizeAge,
} from "../../api/home";
import getDoubleBarOpt from "../../composables/charts/doubleBarChartOpt";
import getSingleBarOpt from "../../composables/charts/singleBarChartOpt";
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
      userAgeChartOpt: {},
    });
    // 获取总数
    const getSummarizeNum = () => {
      qrySummarizeNum(params).then((res) => {
        state.summData = res.data;
      });
    };
    // 用户增长情况图表
    const getUserGrowChart = () => {
      qrySummarizeData(params).then((res) => {
        const chartOpt = {
          legend: ["新增用户数", "设备用户数"],
          xData: [],
          y1Data: [],
          y2Data: [],
        };
        res.data.forEach((item) => {
          chartOpt.xData.push(item.title);
          chartOpt.y1Data.push(item.num1);
          chartOpt.y2Data.push(item.num2);
        });

        state.userGrowChartOpt = getDoubleBarOpt(chartOpt);
      });
    };
    // 用户年龄情况图表
    const getUserAgeChart = () => {
      qrySummarizeAge(params).then((res) => {
        const chartOpt = {
          legend: ["用户年龄"],
          xData: [],
          yData: [],
        };
        res.data.forEach((item) => {
          chartOpt.xData.push(item.title);
          chartOpt.yData.push(item.value);
        });
        state.userAgeChartOpt = getSingleBarOpt(chartOpt);
      });
    };
    onMounted(() => {
      getSummarizeNum();
      getUserGrowChart();
      getUserAgeChart();
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
