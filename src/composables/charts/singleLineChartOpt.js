/*
 * @Description: 文件简介
 * @Date: 2021-06-03 16:18:04
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-04 14:35:31
 */
export default function getSingleLineOpt(options) {
  return {
    grid: {
      top: "10%",
      right: '10px',
      bottom: '20px',
    },
    legend: {
      data: options.legend,
    },
    color: '#00F3D5',
    // 鼠标悬浮提示
    tooltip: {
      trigger: 'axis',
    },
    // X轴
    xAxis: {
      type: 'category',
      data: options.xData,
    },
    yAxis: {
      type: 'value',
      // 坐标轴刻度标签的相关设置
      axisLabel: {
        formatter: '{value}%',
      },
      // 坐标轴轴线相关设置
      axisLine: {
        show: false,
      },
      // 坐标轴刻度相关设置
      axisTick: {
        show: false,
      },
      // 切割线
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#E8E8E8'],
          type: 'dashed',
        },
      },
    },
    series: {
      name: '达标率',
      type: 'line',
      data: options.yData,
      smooth: true,
      symbolSize: 4, // 点的大小
      areaStyle: {
        // 折现下是否填充
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(56, 212, 188, 0.45)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(56, 212, 188, 0)', // 100% 处的颜色
            },
          ],
          global: false,
        },
      },
    },
  }
}
