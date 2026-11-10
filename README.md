# DarkEye 产品宣传页

基于 DarkEye 当前项目功能的静态官网，使用项目真实截图展示 DVD 书架、关联图谱与分析图表。

## 本地预览

在仓库根目录运行：

```bash
python3 -m http.server 8765
```

浏览器访问 http://localhost:8765 。无需安装依赖或构建。

## 页面与资源

- `index.html`：产品首页、功能介绍与下载入口。
- `manual.html`：快速使用手册。
- `css/styles.css`：雾白与薄荷绿主题与响应式布局。
- `js/main.js`：预览标签切换、键盘导航与大图弹窗。
- `assets/screenshots/`：来自 DarkEye 项目 `docs/assets/` 的真实界面截图。

字体使用系统字体，图片、样式与脚本均从本地加载。

## 发布到 GitHub Pages

在 Settings → Pages 中选择 Deploy from a branch，选择目标分支及 `/ (root)`。仓库根目录已经包含 `index.html`，无需复制到其他目录。

下载和详细文档链接分别指向 `gty5678/darkeye` 的 Releases 与在线文档。
