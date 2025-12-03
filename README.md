# Vue Starter Template

一个基于 Vue 3 + TypeScript + Vite 的起步模板，内置 Tailwind CSS v4、常用工具函数以及带侧边栏/顶栏的基础布局，开箱即可开始开发。

## 技术栈
- Vue 3 `<script setup>` + TypeScript
- Vite 7
- Tailwind CSS v4（原子类写在 `src/style.css` 中）
- clsx + tailwind-merge（`cn` 工具函数）
- lucide-vue-next 图标集

## 快速开始
```bash
# 安装依赖（推荐 pnpm）
pnpm install

# 本地开发
pnpm dev

# 生产构建
pnpm build

# 构建产物预览
pnpm preview
```

## 目录结构
```
src/
  main.ts           # 入口文件
  App.vue           # 根组件
  style.css         # 全局样式与 Tailwind 引入
  layouts/          # 布局组件（默认含侧边栏+顶栏布局）
  utils/            # 工具函数（如 cn）
  assets/           # 静态资源
```
