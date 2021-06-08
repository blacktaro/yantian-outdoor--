/*
 * @Description: 文件简介
 * @Date: 2021-06-03 16:27:58
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-03 16:31:31
 */
import axios from '../utils/http'

// 查询汇总数据
export const qrySummarizeNum = (params) => {
  return axios.get('sport_users_nums', { params })
}

// 运动设备使用情况
export const qrySummarizeData = (params) => {
  return axios.get('sport_users_data', { params })
}

// 运动 设备使用偏好
export const qryEquiptmentData = (params) => {
  return axios.get('sport_equiptment_data', { params })
}

// 运动时长
export const qryDurationData = (params) => {
  return axios.get('sport_duration_data', { params })
}

// 运动消耗卡路里
export const qryCaloriesData = (params) => {
  return axios.get('sport_calories_data', { params })
}
