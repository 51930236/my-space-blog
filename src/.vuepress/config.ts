import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import theme from './theme.js';

export default defineUserConfig({
  // 部署到 GitHub Pages 时的路径
  // 如果你的仓库名是 yourname.github.io，设为 '/'
  // 如果仓库名是 repo-name，设为 '/repo-name/'
  base: '/',

  // 网站语言
  lang: 'zh-CN',

  // 网站标题
  title: '深街孤影的博客',

  // 网站描述
  description: '个人博客与知识库',

  // 使用 Vite 打包器
  bundler: viteBundler(),

  // 引用主题配置
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
