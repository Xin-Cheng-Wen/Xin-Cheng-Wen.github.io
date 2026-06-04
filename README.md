# xi1003-art

我的个人主页，部署在 GitHub Pages：<https://xi1003-art.github.io/>

## 技术栈

- **React 18** + **TypeScript**
- **Vite** 构建
- **Tailwind CSS**（通过 CDN 引入）
- **Framer Motion** 做动效

## 本地运行

```bash
npm install
npm run dev
```

打开 <http://localhost:5173> 预览。

## 构建

```bash
npm run build      # 输出到 dist/
npm run preview    # 本地预览生产构建
```

## 部署

push 到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并发布到 GitHub Pages。

首次部署前需要在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

## 目录结构

```
.
├── App.tsx                 # 应用入口
├── index.tsx               # ReactDOM mount
├── index.html              # HTML 模板（含 Tailwind CDN、字体）
├── components/             # 通用组件
├── sections/               # 页面分区（Hero / Profile / Skills / VinylProjects / Contact）
├── data/                   # 静态数据
└── .github/workflows/      # CI/CD
```
