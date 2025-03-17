export const other27 = `
    Webpack 的首次编译时间较慢，由于 Webpack 需要对整个项目进行打包，构建的过程包括：1.分析依赖关系  2.转换文件（例如 babel-loader，ts-loader，css-loader 等）  3.构建输出
    <br>Vite 的优势在于它基于现代浏览器的 原生 ES Modules（ESM），它采用了 按需编译 的模式，不会像 Webpack 那样一次性打包整个项目。
    <br>热更新:
    <br>Webpack:重新打包更新全部的模块
    <br>Vite:只打包更新修改的模块，不需要刷新页面
    <br>生产构建:
    <br>Webpack:强大的生产模式优化（Tree Shaking 等）
    <br>Vite:使用 Rollup 打包，优化结果较好
`

export const other29 = `
    <table border="2">
        <tr>
            <th>特性:<th/><th>HTTP/1.1<th/><th>HTTP/2<th/>
        </tr>
        <tr>
            <td>数据格式:<td/>
            <td>文本<td/>
            <td>二进制<td/>
        </tr>
            <td>并发能力:<td/>
            <td>单个连接串行请求<td/>
            <td>多路复用，单连接多请求<td/>
        <tr>
            <td>头部处理:<td/>
            <td>每次发送完整头部<td/>
            <td>头部压缩<td/>
        </tr>
        <tr>
            <td>加密要求:<td/>
            <td>可选<td/>
            <td>主流浏览器要求HTTPS<td/>
        </tr>
        <tr>
            <td>请求优先级:<td/>
            <td>不支持<td/>
            <td>支持<td/>
        </tr>
        <tr>
            <td>服务器推送:<td/>
            <td>不支持<td/>
            <td>支持<td/>
        </tr>
        <tr>
            <td>性能优化:<td/>
            <td>依赖手动优化<td/>
            <td>协议本身支持优化<td/>
        </tr>
        <tr>
            <td>应用场景:<td/>
            <td>小型或简单站点<td/>
            <td>大型或复杂站点<td/>
        </tr>
    </table>
`
export const other30 = `
    1:使用 box-shadow
    <br>2:使用 transform: scale() 缩放元素
    <br>3:利用媒体查询适配不同设备
    <br>4:使用 border-image
    <br>5:使用 background 模拟 1px 线条
    <br>6:使用 rem 或 em 代替 px
    <br>7:使用 vw 或 vh 单位
    <br>8:CSS 变量和响应式布局
`
export const other31 = `
    1:1秒等于1000毫秒,60帧的话那么 1000毫秒/60hz=16.67毫秒/帧,
    <br>2:1000毫秒/10 每次渲染所需时间（毫秒） = 100条数据
`
export const other32 = `
     qiankun(乾坤)
    <br>通过 Webpack 的 output.library 配置实现模块隔离
    <br>使用 sandbox 沙箱机制 隔离全局变量
    <br>缺陷：JS 沙箱对 ES6+ 语法（如 Proxy）依赖较高，低版本浏览器需额外 polyfill
    <br>连接机制  注册子应用
    <br>// 基座应用配置
        import { registerMicroApps, start } from 'qiankun';
        registerMicroApps([
        {
            name: 'sub-app1',
            entry: '//localhost:7101',
            container: '#sub-container',
            activeRule: '/sub1',
            props: { /* 通信数据 */ }
        }
        ]);
        start();
    <br>动态加载过程
    <br>基座应用->>+Qiankun: 路由匹配
    <br>Qiankun->>子应用: 拉取entry.html
    <br>子应用-->>Qiankun: 返回HTML/JS/CSS
    <br>Qiankun->>沙箱: 创建JS沙箱
    <br>沙箱->>子应用: 执行bootstrap
    <br>沙箱->>子应用: 执行mount
    <br>Qiankun->>DOM: 挂载到容器
    <br>通信机制（2种模式）
    <br>1.Props 传递
    <br>// 基座初始化
        import { initGlobalState } from 'qiankun';
        const actions = initGlobalState({ user: 'admin' });
        // 子应用接收
        export async function mount(props) {
        props.onGlobalStateChange((state) => {
            console.log(state.user);
        });
        }
    <br>2.Event Bus 模式
    <br>// 基座应用
        const bus = new Vue();
        export { bus };
        // 子应用
        window.mainAppBus.emit('event', data);
    <br>生命周期管理
    <br>子应用生命周期bootstrap()  mount(props)   unmount(props) 
    <br>基座控制流程 
    <br>// 全局生命周期
        {
        beforeLoad: [checkPermission],  // 加载前鉴权
        beforeMount: [initAnalytics],   // 挂载前准备
        afterMount: [trackPageView],    // 挂载后追踪
        beforeUnmount: [saveState],     // 卸载前存状态
        afterUnmount: [cleanup]         // 卸载后清理
        }
    <br>
    <br>
`
export const other33 = `
     wujie(无界)
    <br>Web Components 级隔离：每个子应用使用 <wujie-app> 自定义元素容器
    <br>无侵入式沙箱：通过 iframe + Shadow DOM 实现完全隔离
    <br>优势：天然隔离，无性能损耗，兼容低版本浏览器（如 IE9 自动降级为 iframe 模式）
    <br>基座注册子应用
    // 基座入口
    import { createApp } from 'wujie-vue3';
    const app = createApp(App);
    app.use(router).use(store).mount('#app');
    // 子应用配置
    const subApp = {
        name: 'sub1',
        url: 'http://localhost:7101/',
        exec: true,
        props: { user: 'admin' }
    };
    <br>动态加载过程
    <br>基座应用->>+Wujie: 路由匹配/手动加载   
    <br>Wujie->>子应用: 创建iframe沙箱
    <br>子应用-->>Wujie: 加载HTML/JS/CSS
    <br>Wujie->>DOM: 将内容投影到Shadow DOM
    <br>Wujie->>子应用: 执行生命周期
    <br>通信机制（4种模式）
    <br>1. Props 传递   
    <br>// 基座传参
    <br>< WujieVue name='sub1' url='//localhost:7101' :props='{ data: 123 }' >< />
    <br>// 子应用接收
    <br>window.$wujie?.props.data // 获取参数
    <br>2. 事件总线
    <br>// 基座监听
    <br>window.$wujie?.bus.on('sub-event', (data) => {
        console.log('收到子应用事件', data);});
    <br>// 子应用触发
    <br>window.$wujie?.bus.emit('main-event', { type: 'alert' });
    <br>3. 全局状态
    <br>// 基座设置
    <br>window.$wujie?.globalState.set('token', 'ABC123');
    <br>// 子应用获取
    <br>const token = window.$wujie?.globalState.get('token');
    <br>4. 直接通信
    <br>// 基座调用子方法
    <br>window.$wujie?.subApp1.methodName();
    <br>// 子应用调用基座
    <br>window.parent.$wujie?.mainApp.methodName();
    <br>1. 子应用生命周期
    <br>// 子应用配置
        export default {
            bootstrap() {
                console.log('初始化资源');
            },
            mount(container, props) {
                ReactDOM.render(<App/>, container);
            },
            unmount(container) {
                ReactDOM.unmountComponentAtNode(container);
            }
        }
    <br>2. 基座控制钩子
    <br>< WujieVue 
        name="sub1"
        url="//localhost:7101"
        @before-mount="handleBeforeMount"
        @after-mount="handleAfterMount"
        @before-unmount="handleBeforeUnmount"
        @after-unmount="handleAfterUnmount"
    />
    <br>    
`