<!--
 * @Description: 文件简介
 * @Date: 2021-05-31 14:18:04
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-04 14:12:19
-->
<template>
  <div class="map">
    <div
      :id="chartId"
      style="width: 100%; height: 250px;"
    >
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import { watch } from "vue";
export default {
  props: {
    chartId: {
      type: String,
      default: "chart-id",
    },
    chartOpt: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props, content) {
    const echartInit = () => {
      let myChart = echarts.init(document.getElementById(props.chartId));
      myChart.setOption(props.chartOpt);
    };
    watch(
      () => props.chartOpt,
      () => {
        echartInit();
      },
      {
        deep: true,
      }
    );
    return {
      echartInit,
    };
  },
};
</script>
