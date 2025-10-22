import { defineConfig } from "umi";

export default defineConfig({
  plugins: [
    "@umijs/plugins/dist/dva"
  ],
  dva: {
    // 原先是 immer: true 或 false，这里改为对象
    immer: {
      // 可按需添加配置；不需要就留空对象
      // enableES5: true,
    },
  },
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
});
