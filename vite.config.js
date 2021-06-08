/*
 * @Description: 文件简介
 * @Date: 2021-05-31 10:54:18
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-03 10:50:49
 */
import { defineConfig } from 'vite' // defineConfig 帮手函数
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
const path = require('path')
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ], // 配置需要使用的插件列表，这里将vue添加进去
  resolvers: [
    {
      // 目录别名
      alias: {
        '/@/': path.resolve(__dirname, './src'),
      },
    },
  ],
  // 静态资源存放的文件夹(相对于ouputDir)
  assetsDir: 'assets',
  // publicPath: process.env.NODE_ENV == 'production' ? './' : '/', //打包配置，解决页面空白的配置方案。
  base: './', // 生产环境下的公共路径
  outDir: 'dist', // 打包构建输出路径，默认 dist ，如果路径存在，构建之前会被删除
  server: {
    host: '0.0.0.0',
  },
  devServer: {
    hostname: '0.0.0.0', // 默认是 localhost
    port: '8000', // 默认是 3000 端口
    open: true, // 浏览器自动打开
    https: false, // 是否开启 https
    ssr: false, // 服务端渲染
  },
})
