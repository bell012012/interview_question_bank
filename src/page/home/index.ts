export const OriginalDataList = [
    {
        title: "HTML",
        isTitleOpen: false,
        text: [
            { name: "HTML5Canvas元素有什么用？", content: "HTML5的canvas元素是一个用于在网页上绘制图形的容器。通过JavaScript，可以在canvas上绘制各种类型的图形，如线条、矩形、圆形、文本，甚至进行图像处理。canvas广泛应用于游戏开发、数据可视化、动画制作、图像编辑等场景。它提供了一个基于像素的绘图环境，使得网页能够实现动态和交互式的图形效果。<br>总结：用途：绘制图形、动画、图像处理等。应用场景：游戏、数据可视化、图像编辑等。与JavaScript结合：通过JavaScript API控制和操作Canvas内容。", isContentOpen: false },
            { name: "HTML5存储类型有什么区别？", content: "存储容量：cookies：每个cookie的大小通常限制为4KB，适合存储少量的数据（如会话ID、用户标识符等）。localStorage 和 sessionStorage：两者的存储容量通常为5MB以上，比 cookies 的容量要大得多。<br>存储方式：cookies：每次请求都会带上相关的cookie数据，这可能会影响性能，因为每个HTTP请求都需要发送cookies。cookies 主要用于在服务器和客户端之间传递信息。localStorage 和 sessionStorage：这两者仅在客户端存储数据，不会随着HTTP请求发送到服务器，因此对性能的影响较小。<br>数据有效期：cookies：可以设置过期时间，如果没有设置，cookie将在浏览器会话结束时失效（session cookies）。localStorage：数据会一直存在，直到显式删除。sessionStorage：数据仅在当前会话有效，浏览器窗口或标签页关闭时数据会丢失。<br>数据访问范围：cookies：可以被所有同域的页面访问，甚至在不同的窗口和标签页中都可以访问。localStorage 和 sessionStorage：这两者是基于同源策略的，但 localStorage 可以在同一个浏览器的所有标签页中共享，而 sessionStorage 只能在当前标签页内访问。", isContentOpen: false },
            { name: "HTML5有哪些新特性", content: "1. 语义化标签 如header footer nav<br>2. 增强型表单：input 的多个 type<br>3. 新增表单元素：datalist、keygen、output<br>4. 新增表单属性：placehoder、required、min 和 max<br>5. 音频视频：audio、video<br>6. canvas<br>7. 地理定位<br>8. 拖拽<br>9. 本地存储：localStorage - 没有时间限制的数据存储；sessionStorage - 针对一个 session 的数据存储，当用户关闭浏览器窗口后，数据会被删除<br>10. 新事件：onresize、ondrag、onscroll、onmousewheel、onerror、onplay、onpause11. WebSocket：单个 TCP 连接上进行全双工通讯的协议", isContentOpen: false },
        ],
    },
    {
        title: "CSS",
        isTitleOpen: false,
        text: [
            { name: "CSS的继承性有哪些", content: "可继承的样式：font-size, font-family, color，ul，li，dl，dt，dd；<br>不可继承的样式：border, padding, margin, width, height", isContentOpen: false },
            { name: "CSS3新增伪类有那些?", content: "p:first-of-type 选择属于其父元素的首个元素的每个元素。<br>p:last-of-type 选择属于其父元素的最后元素的每个元素。<br>p:only-of-type 选择属于其父元素唯一的元素的每个元素。<br>p:only-child 选择属于其父元素的唯一子元素的每个元素。<br>p:nth-child(2) 选择属于其父元素的第二个子元素的每个元素。<br>:enabled:disabled 控制表单控件的禁用状态。<br>:checked，单选框或复选框被选中。<br>:before在元素之前添加内容，也可以用来做清除浮动<br>:after在元素之后添加内容", isContentOpen: false },
            { name: "css盒子模型包含哪些", content: "1. 内容content2. 内边距padding3. 边框border4. 外边距margin", isContentOpen: false },
            { name: "CSS3有哪些新特性", content: "1. 选择器  如伪选择器和伪元素<br>2. 背景和边框<br>3. 文本效果<br>4. 2D/3D转换<br>5. 动画/过渡<br>6. 多列布局（flex）<br>7. 用户界面（@media）", isContentOpen: false },
            { name: "display:none与visibility:hidden 的区别是什么？", content: "display : none 隐藏对应的元素，不占有位置，会引起回流+重绘visibility:hideen 隐藏对应的元素，还占有原先的位置，只会引起重绘overflow:hidden     溢出隐藏 可以解决margin塌陷的问题和清除浮动功能", isContentOpen: false },
        ],
    },
    {
        title: "JS",
        isTitleOpen: false,
        text: [
            { name: "Es6有哪些新特性", content: "1. let和const<br>2. 解构<br>3. 展开运算符<br>4. 模板字符串<br>5. 箭头函数<br>6. Class类对象的简化赋值", isContentOpen: false },
            { name: "this 的指向？", content: "1.普通函数：指向全局对象（window 或 undefined 严格模式下）。<br>2.方法调用：指向调用该方法的对象。<br>3.构造函数：指向新创建的对象。<br>4.箭头函数：this 由定义时的上下文决定，不可改变。", isContentOpen: false },
            { name: "原型链和继承的实现？", content: "1.原型链：每个对象都有一个内部属性 [[Prototype]] 指向其原型，直到顶层的 null。<br>2.继承实现方式：class 关键字,构造函数结合 Object.create", isContentOpen: false },
            { name: "call()、apply()、bind() 的区别", content: "1.call立即执行,参数逐个传入,函数执行的返回值<br>2.apply立即执行,参数以数组形式传入,函数执行的返回值<br>3.bind不立即执行,参数逐个传入（返回新函数时可以传递参数）,返回绑定后的新函数", isContentOpen: false },
            { name: "every()和some()", content: "1.every检测数组中的每个元素是否都满足指定条件，只有全部满足时返回true<br>2.some检测数组中的至少一个元素是否满足指定条件，满足时立即返回true", isContentOpen: false },
            { name: "let、const和var的区别", content: "特性	var	let	const<br>1.作用域:函数作用域,块作用域,块作用域。<br>2.变量提升:	是，提升后值为undefined，是，但不会初始化，是，但不会初始化。<br>3.可修改性:可以重新赋值和重新声明，可以重新赋值，不可重新声明，不可重新赋值，不可重新声明。<br>4.初始值要求:可选，可选，必须初始化。<br>5.绑定特性:不绑定到当前作用域，绑定到当前作用域，绑定到当前作用域。", isContentOpen: false },
            { name: "forEach和map的区别", content: "forEach()方法会针对每一个元素执行提供的函数，对数据的操作会改变原数组，该方法没有返回值；<br>map()方法不会改变原数组的值，返回一个新数组，新数组中的值为原数组调用函数处理之后的值；", isContentOpen: false },
            { name: "Promise详解", content: "1.Promise有以下三种状态:pending（进行中）,fulfilled（已完成/已成功）,rejected（已失败）<br>2.Promise方法:<br>2.1:then()用于处理resolve的结果<br>2.2:catch()用于处理 reject 的结果。<br>2.3:finally()无论 resolve 还是 reject 都会执行。", isContentOpen: false },
            { name: "同步与异步的分类和宏任务与微任务", content: "1.异步任务有：setTimeout，setInterval，Promise，Async/Await是同步/异步结合。<br>2.宏任务（Macro Task）包括：setTimeout、setInterval、setImmediate、I/O 等。宏任务会被添加到主任务队列。<br>3.微任务（Micro Task）包括：nextTick、Promise.then、MutationObserver、queueMicrotask。微任务的优先级高于宏任务，主线程每次执行一个宏任务后，会先清空微任务队列。", isContentOpen: false },
        ],
    },
    {
        title: "VUE",
        isTitleOpen: false,
        text: [
            { name: "Vue中的v-model双向数据绑定的原理", content: "数据层（Model） 视图层（View） 业务逻辑层（ViewModel） <br>vue2中通过v-bind绑定属性，当属性数据发生变化时，表单内容跟着变化，使用v-on监听input事件，当页面数据发生变化是，通过event事件处理来进行双向数据绑定Vue2数据双向绑定原理的实现 Vue2采用数据劫持并结合发布者-订阅者模式的方式，通过ES6的object.defineProperty()方法去劫持各个属性的setter/getter方法，在数据发生变化的时候，发布信息给订阅者，触发相应的监听回调。<br>在 vue3 中modelValue属性和监听update:modelValue事件，事件为 $emit('update:modelValue')proxy代理，get和set", isContentOpen: false }, 
            { name: "v-if和v-show的区别", content: "v-if是频繁的向DOM树内添加或者删除DOM元素；<br>v-show是通过设置DOM元素的display样式属性控制显隐；", isContentOpen: false }, 
            { name: "v-for key的尽量不要用index", content: "使用id的唯一性能确保虚拟DOM的更新操作尽可能高效，当数据发生变化时，如果元素被添加、删除或移动，原来的索引值会发生变化，导致key与实际内容不匹配，可能会引发渲染错误或性能下降。列表重新排序可能引发错误：使用索引作为key可能会误导Vue认为只是元素位置的简单更新，而不是内容的真正变化。", isContentOpen: false }, 
            { name: "v-for和v-if为什么不可以一起使用", content: "`v-for`和`v-if`确实可以一起使用，`v-for`的优先级高于`v-if`，这意味着`v-for`会先执行，生成元素，然后`v-if`根据条件对这些元素进行过滤。如果`v-for`循环的元素全部不满足`v-if`的条件，那么页面上将不会有任何内容被渲染出来。可以将`v-if`放在父级元素上", isContentOpen: false }, 
            { name: "Vue中的路由", content: "1. 声明式路由,router-link 声明式定义跳转.<br>2. 函数式路由,this.$router 方法实现动态路由跳转,<br>常用方法：<br>this.$router.push：跳转到指定路由。<br>this.$router.replace：替换当前路由（不保留历史记录）。<br>this.$router.back：返回上一页。<br>this.$router.forward：前进一页。<br>this.$router.go(n)：跳转到历史记录的第 n 个页面。<br>$router 和 $route 的区别,$router,用于控制路由跳转。$route,包含当前路由的信息，如 path、params、query 等。<br>Query传参?id=123，刷新不丢失，定义路由不需要声明<br>Params,/home/123,刷新丢失，定义路由需要声明", isContentOpen: false }, 
            { name: "vue的生命周期有哪些", content: "beforeCreate -> 使用 setup()<br>created -> 使用 setup()<br>beforeMount -> onBeforeMount<br>mounted -> onMounted<br>beforeUpdate -> onBeforeUpdate<br>updated -> onUpdated<br>beforeDestroy -> onBeforeUnmount<br>destroyed -> onUnmounted<br>errorCaptured -> onErrorCaptured<br>keep-alive 包裹时，那该组件就多了2个生命周期，activated 和deactivated", isContentOpen: false }, 
            { name: "keep-alive", content: "组件缓存： keep-alive 会缓存被包裹的组件，在组件被切换时不会销毁，而是保留其状态。当再次激活时，组件会恢复之前的状态。<br>activated 和 deactivated 生命周期钩子：<br>activated：当组件被激活时触发，相当于组件重新显示或进入视图时。<br>deactivated：当组件被停用时触发，相当于组件离开视图时，但并未销毁。组件的状态被保留，便于下次激活时恢复。<br>keep-alive 主要适用于以下场景：切换多个视图组件时，避免重新渲染和重新加载数据。提高性能，特别是当组件中有复杂的初始化操作时。用于在切换组件时保持组件的状态，如表单的输入数据、滚动位置等。注意事项keep-alive 会缓存组件的状态，但如果需要手动控制缓存的组件，<br>可以使用 include 和 exclude 属性来指定哪些组件需要被缓存，哪些不需要。被 keep-alive 缓存的组件不会被销毁，因此要注意它们的资源和内存使用。", isContentOpen: false }, 
            { name: "父组件和子组件之间的生命周期", content: "执行顺序如下：<br>先走父组件的：beforeCreate ，created ，beforeMount <br>再走子组件的：beforeCreate ，created ，beforeMount，mounted <br>多个子组件也是，先走完上面四个然后再走父组件的：mounted <br>beforeCreate ：拿不到dom节点和data数据<br>created ：拿不到dom节点，可以拿到data数据<br>先走同步，再走异步，setTimeout和setInterval和nextTick 都是异步", isContentOpen: false }, 
            { name: "组件通讯方式有哪些", content: "父子通讯：props和$emit    兄弟通讯：Event Bus和vuex  跨级通讯：Event Bus和vuex和provide/inject", isContentOpen: false }, 
            { name: "父组件和子组件传参问题", content: "父组件可以props传参给子组件，也可以使用ref操作节点传参，子组件可以使用$emit传过去给父组件修改属性，不可以直接在子组件修改父组件的属性，因为子组件没法ref拿到父组件的节点。", isContentOpen: false }, 
            { name: "computed和watch的区别", content: "1. computed：缓存特性：computed 是基于依赖的属性进行计算的，并且只有在相关依赖发生变化时才会重新计算。也就是说，如果计算的结果没有变化，computed 会返回缓存的值，避免不必要的重新计算，提高性能。用途：一般用于需要基于现有数据进行计算或格式化的场景。例如，计算一个值或根据其他值生成新数据。使用场景：当你需要计算一个值并且该值依赖于其他值的变化时，使用 computed 是更合适的。<br>2. watch：没有缓存：watch 监听某个数据或计算属性的变化，并在变化时执行指定的回调函数。它不会缓存值，每次数据变化时都会执行回调。用途：一般用于监听某些数据的变化，并在数据变化时执行一些异步操作或副作用（如发起请求、更新其他数据等）。它可以是同步的或异步的。使用场景：当你需要在数据变化时执行一些操作（如异步请求、数据保存等）时，使用 watch 更合适。<br>主要区别：缓存：computed 会缓存结果，只有当依赖的属性变化时才会重新计算；而 watch 不缓存每次执行的结果。用途：computed 更适合用于计算属性，进行同步计算。watch 更适合用于监听数据变化并执行副作用操作（如发起异步请求、执行复杂的操作等）。", isContentOpen: false }, 
            { name: "vue3中 watch、watchEffect区别", content: "1、watch是惰性执行，也就是只有监听的值发生变化的时候才会执行，但是watchEffect不同，每次代码加载watchEffect都会执行（忽略watch第三个参数的配置，如果修改配置项也可以实现立即执行）<br>2、watch需要传递监听的对象，watchEffect不需要<br>3、watch只能监听响应式数据：ref定义的属性和reactive定义的对象，如果直接监听reactive定义对象中的属性是不允许的（会报警告），除非使用函数转换一下。其实就是官网上说的监听一个getter<br>4、watchEffect如果监听reactive定义的对象是不起作用的，只能监听对象中的属性。", isContentOpen: false }, 
            { name: "$nextTick()的方法", content: "$nextTick()用于在下次DOM更新循环结束之后执行回调函数。它通常用于在修改数据后，等待 DOM 更新完成后执行一些操作。<br>工作原理：在 Vue 中，DOM 更新是异步的。修改数据后，Vue 会将更新放入队列，并在下一个事件循环中更新 DOM。$nextTick() 会将回调推入队列，确保它在 DOM 更新完成后执行。", isContentOpen: false }, 
            { name: "vue2和vue3的区别", content: "1.响应式系：vue2是Object.defineProperty，vue3是Proxy<br>2.API:vue2是Options API  vue3是Composition API<br>3.性能优化:vue2较慢,vue3更快,体积更小<br>4.TypeScript支持:vue2较弱，通过其他工具，vue3原生支持<br>5.全局API:vue2挂载在Vue上,vue3挂载在应用实例上<br>6.多根节点支持:vue2不支持template必须有一个div,vue3支持Fragment<br>7.自定义渲染器:vue2不支持,vue3支持多个v-model", isContentOpen: false }, 
            { name: "ref和reactive的区别", content: "1.数据类型:ref:基本类型、复杂类型,reactive:对象类型、数组类型<br>2.访问方式:ref:.value 访问基本类型,reactive:直接访问属性<br>3.响应式实现:ref:Proxy包装.value管理,reactive:Proxy深度代理整个对象<br>4.嵌套处理:ref:需要手动处理嵌套响应式,reactive:自动深度响应式<br>5.使用场景:ref:单值响应式（如表单输入值）内存开销小,reactive:复杂对象的状态管理,内存占用相对较高", isContentOpen: false }, 
        ],
    },
    {   
        title: "REACT",
        isTitleOpen: false,
        text: [
            
        ],
    },
    {
        title: "其他",
        isTitleOpen: false,
        text: [
            { name: "节流与防抖的本质", content: "这两个东西都以闭包的形式存在，它们通过对事件对应的回调函数进行包裹、以自由变量的形式缓存时间信息，最后用 setTimeout 来控制事件的触发频率。", isContentOpen: false },
            { name: "什么是节流throttle（事件节流）", content: "在某段时间内，不管你触发了多少次回调，我都只认第一次，并在计时结束时给予响应。", isContentOpen: false },
            { name: "什么是防抖debounce（事件防抖）", content: "在某段时间内，不管你触发了多少次回调，我都只认最后一次。", isContentOpen: false },
            { name: "前端性能优化", content: "1. 减少 HTTP 请求次数。<br>2.使用 CDN：将静态资源（如图片、JS、CSS）放在 CDN 上，减少资源的加载时间和请求次数。<br>3. 使用精灵图合并小图片为精灵图：将多个小图片合并成一张大图片使用。<br>4.使用 WebP 格式：WebP 格式在保证较高图像质量的同时，可以显著减少图片的文件大小。<br>5.懒加载：使用懒加载技术，延迟加载视口外的数据，减少初始加载时的资源请求。<br>6.图片尺寸优化：根据显示设备的屏幕分辨率和设备宽度调整图片的尺寸，避免加载不必要的大尺寸图片。<br>7. 节流和防抖节流（Throttle）防抖（Debounce）。<br>8. 资源缓存使用浏览器缓存：indexDB,Service Worker支持离线使用和加速资源加载。<br>9. 异步组件。<br>10. CSS 和 JavaScript 优化CSS 合并和压缩减少。<br>11.!important：过多的使用 !important 会导致 CSS 优化困难，尽量避免使用。<br>12. 减少 DOM 操作减少 DOM 操作次数`", isContentOpen: false },
            { name: "后端要一次性返回我10万条数据", content: "1.使用定时器分组分批分堆依次渲染（定时加载、分堆思想）<br>使用 requestAnimationFrame 替代定时器去做渲染。<br/>3.搭配分页组件，前端进行分页（每页展示一堆，分堆思想）。<br>4.表格滚动触底加载（滚动到底，再加载一堆）。<br>5.虚拟滚动：通过只渲染当前可视区域的数据，节省了大量的 DOM 元素，避免了性能瓶颈。比如，vue-virtual-scroller 这种库就可以帮助你实现虚拟滚动。", isContentOpen: false },
            { name: "什么是递归，递归和循环的区别", content: "一个函数直接或间接调用自身的一种方法，需要一个递归出口<br>循环：通过重复执行一段代码来完成任务，直到满足某个条件停止。<br>性能差异：递归：每次调用都需要占用函数调用栈，因此递归深度过大会导致栈溢出。对于某些问题，递归可能不如循环高效。循环：通常不需要额外的栈空间，因此性能较好，适用于可以通过简单的迭代来解决的问题。", isContentOpen: false },
            { name: "闭包", content: "闭包就是一个fn能够访问到另一个fn函数内申明的变量，形成的闭环，就叫闭包", isContentOpen: false },
            { name: "回调函数", content: "回调函数就是：将一个函数作为参数，传入到另外一个函数内，当那个函数执行完后，再执行传进去的函数，这个过程就叫做回调函数", isContentOpen: false },
            { name: "箭头函数的理解", content: "箭头函数也被称为 lambda函数，相对于传统的函数声明和函数表达式，箭头函数更加简洁，没有自己的this对象，this指向在定义时确定，不是在运行时确定，无法使用call apply  bind方法来改变this指向，箭头函数的return可以省略默认返回最后一个表达式", isContentOpen: false },
            { name: "深浅拷贝", content: "前提为拷贝类型为引用类型的情况下：<br>浅拷贝是拷贝一层，属性为对象时，浅拷贝是复制，两个对象指向同一个地址深拷贝是递归拷贝深层次，属性为对象时，<br>深拷贝是新开栈，两个对象指向不同的地址<br>常见的深拷贝方式有：使用 JSON 序列化：JSON.parse(JSON.stringify(obj)) 循环,递归", isContentOpen: false },
            { name: "px rpx rem em vh vw 的区别是什么？", content: "px 是绝对单位长度，其他的是相对单位长度<br>rpx 微信小程序规定屏幕的宽度为750rpx  如手机屏幕宽度为375px 即1rpx=0.5px<br>rem 参照根元素hmlt 的font-sizi  如设置10px  那么1rem=10px<br>em  参照父元素的font-sizi  如父元素的font-sizi为5em 根元素html设置的为font-sizi=10px 那么子元素的1em=50px<br>vh vw 即屏幕分成100份  Viewport 视口pc端，Viewport指的是浏览器的可视区域移动端，涉及3个视口：Layout viewport（布局视口）、Visual viewport（视觉视口）、Ideal viewport（理想视口）。Viewport指的是其中的Layout Viewport。根据CSS3规范，视口单位包括以下4个vw: 1 vw等于视口宽度的1%vh: 1 vh等于视口高度的1%vmin: 选取vw和vh中最小的那个vmax: 选取vw和vh中最大的那个", isContentOpen: false },
            { name: "状态码", content: "消息类（1开头） 成各类（2开头）重定向（3开头）请求错误（4开头）服务器错误（5开头）", isContentOpen: false },
            { name: "后台系统的权限管理怎么设置", content: "前端方案：把所有路由信息在前端配置，通过路由守卫要求用户登录，用户登录后根据角色过滤出路由表，配置一个asyncRoutes数组，需要认证的页面在其路由的meta中添加一个roles字段，等获取用户角色之后取两者的交集，若结果不为空则说明可以访问，剩下的路由就是该用户能访问的页面，通过router.addRoutes(accessRoutes)方式动态添加路由<br>后端方案：把所有页面路由信息存在数据库中，用户登录的时候根据角色查询得到能访问的所有页面路由信息返回给前端，前端再通过addRoutes动态添加路由信息<br>按钮权限：控制实现一个指令，v-permission，将按钮要求角色通过值传给v-permission指令，在指令的mouned钩子中可以判断当前用户校色和按钮是否存在交集，有则保留按钮，没有移除按钮", isContentOpen: false },
            { name: "vue后台管理系统如何设置主题", content: "1. 创建一个全局的CSS变量文件（theme.css），定义了不同主题对应的颜色值<br>2. 在App.vue或者根组件中，添加一个按钮或者菜单项，供用户切换主题。当点击该按钮时，会调用一个函数来更新主题。<br>3.编写一个名为changeTheme()的函数，用于动态修改全局的CSS变量。", isContentOpen: false },
            { name: "前端如何实现token的无感刷新", content: "方案一：后端返回过期时间，前端每次请求就判断token的过期时间，如果快到过期时间，就去调用刷新token接口。缺点：需要后端额外提供一个token过期时间的字段；使用了本地时间判断，若本地时间被篡改，特别是本地时间比服务器时间慢时，拦截会失败。<br>方法二：写个定时器，然后定时刷新token接口。缺点：浪费资源，消耗性能,不建议采用。<br>方法三：在请求响应拦截器中拦截，判断token 返回过期后，调用刷新token接口。service.interceptors.response", isContentOpen: false },
            { name: "什么是electron主进程?", content: "electron 运行package.json的main脚本的进程被称作主进程每个electron只有一个主进程用于管理原生GUI， 典型的窗口（BrowserWindow、Tray、Dock、Menu）主进程用于创建渲染进程主进程控制应用的生命周期electron项目的主进程只有一个, 主进程的执行代码需要写到main.js中, 起到统筹全局的作用", isContentOpen: false },
            { name: "Web Worker，Service Worker和Worklet的区别?", content: "Web Worker，Service Worker和Worklet都是在与浏览器页面线程不同的线程上运行的脚本。它们的不同之处在于它们的使用位置以及启用这些用例所必须具备的功能。<br>worklet与浏览器的渲染管道挂钩，使我们能够对浏览器的渲染过程（例如样式和布局）进行低级访问。<br>service worker是浏览器和网络之间的代理。通过拦截文档发出的请求，service worker可以将请求重定向到缓存，从而实现脱机访问。<br>Web Worker是通用脚本，使我们能够从页面线程上卸载处理器密集型worker。", isContentOpen: false },
            { name: "什么是PWA？", content: "PWA 全称Progressive Web Apps(渐进式Web应用程序)，旨在使用现有的web技术提供用户更优的使用体验。<br>可靠（Reliable）即使在不稳定的网络环境下，也能瞬间加载并展现能够借助 Service Worker 在离线或者网络较差的情况下正常访问.<br>快速响应（Fast）快速响应，并且有平滑的动画响应用户的操作粘性(Engaging)像设备上的原生应用，具有沉浸式的用户体验，用户可以添加到桌面", isContentOpen: false },
            { name: "cdn如何快速获取html和css和js", content: "1.将静态资源上传到 CDN 服务商<br>2.更新DNS设置指向CDN<br>3.使用CDN提供的链接来加载静态资源<br>4.配置CDN的缓存过期时间，以确保资源能够长期缓存", isContentOpen: false },
            { name: "WebSocket的api有哪些", content: "readyState 状态<br>onopen 连接成功后的回调函数<br>onmessage 从服务器接受到信息时的回调函数<br>onclose 连接关闭后的回调函数<br>onerror 连接失败后的回调函数<br>bufferedAmount 未发送至服务器的字节数<br>send() 对要传输的数据进行排队<br>close() 关闭当前链接", isContentOpen: false },
            { name: "什么是基本类型和引入类型数据", content: "基本类型:存储在栈（Stack）中，值直接保存在变量中,不可变（值本身不会改变，重新赋值会创建新的值）,按值传递（变量的值会被复制，而不是引用）,string,number,boolean,null,undefined,bigint,symbol, <br>引用类型:存储在堆（Heap）中，变量保存的是对象的内存地址（引用）,可变（对象内容可以修改，引用地址不变）,按引用传递（变量指向相同的内存地址，修改会影响原对象）,object,array,function,class,map/set,<br>总结基本类型 适用于简单值（如数字、布尔值）。引用类型 适用于复杂数据结构（如对象、数组、函数）。 理解它们的存储和操作机制有助于写出更高效和正确的代码。", isContentOpen: false },
            { name: "一个网站打开到完全打开经过了哪些", content: "1. 用户输入URL<br>2.DNS解析<br>3. 建立 TCP 连接<br>4. 发送 HTTP 请求<br>5. 服务器响应 HTTP<br>6. 解析 HTML<br>7. 下载资源<br>8. 解析 CSS 和 JS<br>9. 构建渲染树<br>10. 布局和绘制<br>11. 执行 JavaScript<br>12. 图片、视频等资源加载<br>13. 页面交互和动画<br>14. 页面完全加载", isContentOpen: false },
            { name: "什么是indexDB", content: "IndexedDB是一种低级别的客户端存储技术，提供了浏览器中持久化存储大量结构化数据的能力。它是由浏览器内置的一个NoSQL 数据库，支持键值对的存储，并允许高效地查询、索引和事务操作。<br>特性:	localStorage	sessionStorage	IndexedDB<br>容量限制:	~5MB	~5MB	几乎无限制<br>数据类型:	字符串	字符串	结构化数据<br>读写操作:	简单同步	简单同步	复杂异步<br>数据过期:	永久	会话	永久<br>查询效率:	无索引，查询慢。	无索引，查询慢。	支持索引，高效查询。", isContentOpen: false },
            { name: "前端如何处理跨域", content: "跨域主要是由 同源策略 引起的，涉及协议、域名和端口号的不同.<br>1. 使用JSONP,只支持GET请求<br>2.使用CORS,设置服务器响应头Access-Control-Allow-Origin,需要后端支持并正确配置.<br>3.webpack.config.js或者vite.config.js配置proxy<br>4.使用Nginx反向代理,Nginx配置server<br>5.WebSocket", isContentOpen: false },
            { name: "哪些情况会导致内存泄漏", content: "1.意外的全局变量：由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。<br>2.被遗忘的计时器或回调函数：设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。<br>3.脱离 DOM 的引用：获取一个 DOM 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收。<br>4.闭包：不合理的使用闭包，从而导致某些变量一直被留在内存当中。", isContentOpen: false },
            { name: "什么是堆，什么是栈", content: "特性	  栈 (Stack)	  堆 (Heap)   <br>1.分配方式:自动分配和释放,手动分配和释放（动态分配）。<br>2.存储内容:局部变量、函数调用信息,对象、数组等复杂数据结构。<br>3.速度:快,慢。<br>4.内存管理:由系统管理，自动释放,程序员管理，依赖垃圾回收机制。<br>5.内存大小:小，受栈空间限制,大，可动态分配。<br>6.存储结构:后进先出 (LIFO),无特定结构，内存地址随机分布。<br>7.适用场景:临时变量、函数调用,动态对象、大数据结构。<br>8.栈: 快速高效，适用于短期存储和简单变量。<br>9.堆: 灵活多样，适用于复杂数据结构和长期存储。", isContentOpen: false },
        ],
    },
] 