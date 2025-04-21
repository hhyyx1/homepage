# Personal Homepage

![{C6A524F1-6AEA-4A18-98DF-FBDE8A8303FA}.png](https://cfimg.7374520.xyz/file/1745243960234_{C6A524F1-6AEA-4A18-98DF-FBDE8A8303FA}.png)
**目前只是一个大概框架，基本上啥都没有，如果想用可以自己动动手修改**.
## 关于项目

这是一个轻量级的个人主页，项目名为 "homepage"，使用 HTML、CSS 和 JavaScript 构建。它具有动态背景、交互式头像和导航栏，适合展示个人简介、项目和联系方式。网页托管在 GitHub 上，支持通过 GitHub Pages、Cloudflare Pages 或 Vercel 部署。

## 功能特性

- **动态背景**：根据设备类型自动切换背景图：
  - 电脑端和手机端都有默认接口也可自行替换
  - 电脑端：`[invalid url, do not cite]`
  - 手机端：`[invalid url, do not cite]`
- **交互式头像**：使用外部图床图片，鼠标悬停时随机顺时针或逆时针旋转，点击时生成粒子效果（30 个彩色圆点和 1 个白色大圆圈）。
- **点击烟花效果**：页面点击触发烟花动画，使用 mouse-firework 库。
- **自定义光标**：
  - 默认光标：独特的箭头样式。
  - 交互元素光标：帮助样式光标。
  - 文本输入光标：文本选择光标。
- **导航栏**：包含页面内跳转（首页、关于、项目、联系）和外部链接（博客、GitHub）。
- **项目展示**：列出项目描述和链接，便于扩展。
- **响应式设计**：适配不同屏幕尺寸。


## 技术栈

- HTML5
- CSS3
- JavaScript
- tsParticles：用于头像点击的粒子效果
- mouse-firework：用于页面点击的烟花效果

## 本地运行

1. 克隆仓库或下载文件。
2. 在浏览器中打开 `index.html` 查看本地效果。

## 部署方法

### GitHub Pages

1. 访问 GitHub 新建仓库页面，创建一个名为 `homepage` 的仓库。
2. 上传所有文件（`index.html`、`styles.css`、`background.js`、`avatar.js`、`main.js`、`README.md`）到仓库。
3. 进入仓库的 “Settings” &gt; “Pages”，设置 “Source” 为 “main” 分支，“Folder” 为 “/”，保存。
4. 网站将在 `[yourusername].github.io/homepage` 上线。

### Cloudflare Pages

1. 访问 Cloudflare Pages，注册或登录。
2. 点击 "Create a project"，选择 "Connect to Git"。
3. 授权 Cloudflare 访问 GitHub，选择 "homepage" 仓库。
4. 配置：
   - 项目名称：任意（例如 "homepage"）。
   - 构建命令：留空。
   - 输出目录：`/`。
5. 点击 "Save and Deploy"。
6. 部署完成后，访问分配的 URL（例如 `your-project.pages.dev`）。

### Vercel

1. 访问 Vercel，使用 GitHub 账户登录。
2. 点击 "New Project"，选择 "Import Git Repository"。
3. 选择 "homepage" 仓库，点击 "Import"。
4. 配置：
   - 框架预设：选择 "Other"。
   - 输出目录：`/`。
5. 点击 "Deploy"。
6. 部署完成后，访问分配的 URL（例如 `homepage.vercel.app`）。

## 自定义

- **内容**：编辑 `index.html` 中的姓名、职业、项目描述和链接。
- **样式**：修改 `styles.css` 调整字体、颜色或布局。
- **功能**：编辑 `background.js`（背景图）、`avatar.js`（头像交互）或 `main.js`（粒子效果、旋转）。

## 注意事项

- 确保头像 URL  可访问。如不可用，可上传图片到 GitHub 仓库。
- 背景图 API 可能因网络问题加载失败，可考虑备用 API。
- 粒子效果可能影响低端设备性能，可减少粒子数量（例如将 30 改为 15）。
- 自定义光标可能影响文本输入区域的用户体验，可根据需要调整。

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过 [联系方式](https://t.me/kkz114514Bot "问题反馈❓") 联系，或访问我的 GitHub 主页。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=hhyyx1/homepage&type=Date)](https://www.star-history.com/#hhyyx1/homepage&Date)
