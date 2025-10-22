import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './table',
    },
    {
      name: ' 论坛',
      path: '/forum',
      component: './forum',
    },
    {
      name: ' 帖子',
      path: '/thread/:tid',
      component: './thread/$tid',
      hideInMenu: true,
    }
  ],
  npmClient: 'pnpm',
});

