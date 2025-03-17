export const html4 = `
   Canvas 和 SVG 的区别
    <br>1. 渲染方式
    <br>Canvas：基于像素的位图渲染会失真，通过 JavaScript API 动态绘制图形，绘制后不保留对象信息（无 DOM 节点）。
    <br>SVG：基于矢量的 XML 格式不失真，图形由可操作的 DOM 元素组成，支持 CSS 和事件绑定。
    <br>
    <br>2. 性能
    <br>Canvas：适合高频更新（如游戏、复杂动画），但复杂场景可能因频繁重绘导致性能下降。
    <br>SVG：适合静态或低频更新场景，DOM 过多时性能较差，但简单图形操作（如缩放、移动）更高效。
    <br>
    <br>3. 适用场景
    <br>Canvas：数据可视化（如动态图表）、游戏、图像处理（滤镜、像素操作）。
    <br>SVG：图标、可交互图表、可缩放的 UI 元素（如地图）。
    <br>
    <br>4. API 复杂度
    <br>Canvas：需手动控制绘制逻辑（如路径、坐标计算）。
    <br>SVG：通过操作 DOM 或属性（如修改 d 属性实现路径动画）更直观。
    <br>
    <br>5. 兼容性与扩展
    <br>Canvas：现代浏览器支持良好，依赖 JavaScript 实现交互。
    <br>SVG：对屏幕阅读器和 SEO 更友好，支持 CSS 动画和渐变。
    <br>
    <br>前端动画库与 JS 方案    
    <br>简单动画：CSS 或 Animate.css，Tailwind CSS。
    <br>复杂交互：GSAP 或 Anime.js，Mo.js。
    <br>3D/游戏：Three.js 或 Pixi.js。
    <br>数据可视化：D3.js（SVG）或 ECharts（Canvas）。
 `