Personal Homepage
这是一个使用 HTML、CSS 和 JavaScript 构建的个人主页，项目名为 "homepage"。它具有动态背景、交互式头像和导航栏，适合展示个人简介、项目和联系方式。网页托管在 GitHub 上，可通过 GitHub Pages、Cloudflare Pages 或 Vercel 部署。
功能

动态背景：根据设备类型自动切换背景图：
电脑端和手机端有默认的图片接口，也可以自己自己更改



交互式头像：使用外部图床图片，鼠标悬停时顺时针旋转，点击时在鼠标位置生成粒子效果（30 个彩色圆点和 1 个白色大圆圈）。
导航栏：包含链接到首页、关于、项目、博客、GitHub 和联系方式。
响应式设计：适配不同屏幕尺寸，确保良好的用户体验。

技术栈

HTML5
CSS3
JavaScript
tsparticles：用于粒子效果

部署方法
以下是三种部署方式的详细步骤：
1. GitHub Pages

创建仓库：
登录 GitHub，创建名为 "homepage" 的仓库。
勾选 "Initialize this repository with a README"。


上传文件：
将 index.html 和 README.md 上传到仓库。
在仓库页面点击 "Add file" > "Upload files"，选择文件并提交。


启用 GitHub Pages：
进入仓库的 "Settings" > "Pages"。
设置 "Source" 为 "main" 分支，"Folder" 为 "/"。
保存后，访问 [yourusername].github.io/homepage 查看网站。


验证：
确保网站加载正确，背景图和头像交互正常。



2. Cloudflare Pages

注册账户：
访问 Cloudflare Pages，注册或登录。


创建项目：
点击 "Create a project"，选择 "Connect to Git"。
授权 Cloudflare 访问您的 GitHub 账户，选择 "homepage" 仓库。


配置构建：
构建命令：留空（静态网站无需构建）。
输出目录：/。
环境变量：无需设置。


部署：
点击 "Save and Deploy"。
部署完成后，获取分配的 URL（例如 your-project.pages.dev）。


自定义域名（可选）：
在 Cloudflare 仪表板中绑定自定义域名。



3. Vercel

注册账户：
访问 Vercel，使用 GitHub 账户登录。


导入仓库：
点击 "New Project"，选择 "Import Git Repository"。
选择 "homepage" 仓库，点击 "Import"。


配置项目：
框架预设：选择 "Other"（静态网站）。
输出目录：/。
构建命令和环境变量：留空。


部署：
点击 "Deploy"。
部署完成后，访问分配的 URL（例如 homepage.vercel.app）。


自定义域名（可选）：
在 Vercel 仪表板中添加自定义域名。



使用方法

克隆仓库或下载 index.html 文件。
在浏览器中打开 index.html 查看本地效果。
按照上述部署步骤将网站上线。

自定义

内容：编辑 index.html 中的姓名、职业、项目描述和链接。
样式：修改 CSS（如字体、颜色）以匹配您的风格。
粒子效果：调整 JavaScript 中的粒子参数（如颜色、数量、速度）。

注意事项

确保头像 URL 所使用的图床 可访问。如果不可用，上传图片到 GitHub 仓库并更新链接。
背景图 API 可能因网络问题加载失败，可考虑备用 API。
tsparticles 库通过 CDN 加载，确保网络连接正常。

许可证
本项目采用 MIT 许可证，详情见 LICENSE.md 文件。
