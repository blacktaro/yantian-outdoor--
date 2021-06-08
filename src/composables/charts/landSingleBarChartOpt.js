/*
 * @Description: 文件简介
 * @Date: 2021-06-03 16:47:33
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-04 14:07:26
 */

export default function getDoubleBarOpt(options) {
  return {
    grid: {
      left: '75px',
      top: '10px',
      right: '10px',
      bottom: '20px',
    },
    // 提示
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    xAxis: {
      type: 'value',
      // 坐标轴刻度标签的相关设置
      axisLabel: {
        formatter: '{value}',
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
    yAxis: {
      type: 'category',
      data: options.xData,
      // 坐标轴轴线相关设置
      axisLine: {
        show: false,
      },
      // 坐标轴刻度相关设置
      axisTick: {
        show: false,
      },
      axisLabel: {
        // 加入这段代码隐藏过长的文字,长度可以自己定义
        formatter: function (value) {
          var res = value
          if (res.length > 3) {
            res = res.substring(0, 5) + '..'
          }
          return res
        },
      },
    },
    series: [
      {
        name: '使用人数',
        data: options.yData,
        type: 'bar',
        showBackground: true,
        // 顶部数字展示pzr
        itemStyle: {
          // 柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
          borderRadius: 30,
          color: '#38D4BC',
          // 柱形图圆角，初始化效果
          borderRadius: [0, 10, 10, 0],
        },
        label: {
          show: true, // 是否展示
          fontWeight: 'bolder',
          fontSize: '12',
          fontFamily: '微软雅黑',
          color: '#fff',
        },
      },
    ],
  }
}
