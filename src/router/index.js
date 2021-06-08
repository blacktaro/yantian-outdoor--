/*
 * @Description: 文件简介
 * @Date: 2021-05-26 18:00:51
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-02 14:36:03
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../views/layout/index.vue'

export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
        },
        component: () => import('../views/home/Home.vue'),
      },
    ],
  },
]
const hash = createWebHashHistory()
const router = createRouter({
  history: hash,
  routes,
})
export default router
