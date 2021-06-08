/*
 * @Description: 文件简介
 * @Date: 2021-06-03 15:48:11
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-04 14:04:33
 */
export default function getRadarOpt(options) {
  return {
    tooltip: {
      // 雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
      confine: true,
      enterable: true, // 鼠标是否可以移动到tooltip区域内
    },
    grid: {
      left: '0',
      right: '10px',
      bottom: '20px',
    },
    radar: {
      splitNumber: 8, // 雷达图圈数设置
      splitArea: {
        areaStyle: {
          show: false,
          color: '#D8E3E2',
        },
      },
      splitLine: {
        lineStyle: {
          color: ['#fff'],
        },
      },
      axisTick: {
        lineStyle: {
          color: ['#fff'],
        },
      },
      textStyle: { fontSize: 12 },
      indicator: options.indicator,
    },
    series: [
      {
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
          shadowColor: 'rgba(0,0,0,.2)',
        },
        data: [
          {
            value: options.value,
            name: '使用人数',
            // 设置区域边框和区域的颜色
            itemStyle: {
              color: '#38D4BC',
              lineStyle: {
                color: '#fff',
              },
            },
          },
        ],
      },
    ],
  }
}
