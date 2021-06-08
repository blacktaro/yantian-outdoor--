/*
 * @Description: 文件简介
 * @Date: 2021-06-03 17:09:53
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-03 17:12:41
 */
import axios from '../utils/http'

// 查询汇总数据
export const qrySummarizeNum = (params) => {
  return axios.get('path_users_nums', { params })
}

// 查询用户增长数据
export const qrySummarizeData = (params) => {
  return axios.get('path_users_data', { params })
}

// 查询用户年龄时长
export const qryDurationData = (params) => {
  return axios.get('path_duration_data', { params })
}
