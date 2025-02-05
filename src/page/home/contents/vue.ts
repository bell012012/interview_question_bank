export const vue1 = `
    数据层（Model） 视图层（View） 业务逻辑层（ViewModel） 
    <br>Vue 2 采用 Object.defineProperty 实现响应式数据劫持
    <br>Observer：拦截数据对象，实现 getter 和 setter。
    <br>Dep（依赖收集）：管理 Watcher（观察者）
    <br>Watcher：负责更新视图（DOM）。
    <br>Compiler（模板解析器）：解析模板指令（如 v-model），绑定事件监听。
    <br>Vue 3 使用 Proxy  通过 reactive() 结合 effect() 实现自动依赖追踪    
`
export const vue8 = `
    加载渲染过程：
    <br>父组件 beforeCreate created beforeMount 子组件 beforeCreate created beforeMount mounted 父组件 mounted
    <br>
    <br>更新过程：
    <br>父组件 beforeUpdate 子组件 beforeUpdate updated 父组件 updated
    <br>
    <br>销毁过程：
    <br>父组件 beforeDestroy 子组件 beforeDestroy destroyed 父组件 destoryed
    <br>
    <br>beforeCreate ：拿不到dom节点和data数据    
    <br>created ：拿不到dom节点，可以拿到data数据
    <br>先走同步，再走异步，setTimeout和setInterval和nextTick 都是异步
`
export const vue10 = `
    父组件可以props传参给子组件，也可以使用ref操作节点传参，子组件可以使用$emit传过去给父组件修改属性，不可以直接在子组件修改父组件的属性，
    <br>因为子组件没法ref拿到父组件的节点。Vue提倡单向数据流，这是为了防止意外的改变父组件状态，使得应用的数据流变得难以理解，导致数据流混乱。
    <br>defineExpose：通过 Vue 3 的 defineExpose 来暴露子组件的方法给父组件。
`
export const vue11 = `
    Computed： 
    <br>它支持缓存，只有依赖的数据发生了变化，才会重新计算
    <br>不支持异步，当Computed中有异步操作时，无法监听数据的变化
    <br>computed的值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data声明过，或者父组件传递过来的props中的数据进行计算的。
    <br>如果一个属性是由其他属性计算而来的，这个属性依赖其他的属性，一般会使用computed
    <br>如果computed属性的属性值是函数，那么默认使用get方法，函数的返回值就是属性的属性值；在computed中，属性有一个get方法和一个set方法，当数据发生变化时，会调用set方法。
    <br>  
    <br>Watch：  
    <br>它不支持缓存，数据变化时，它就会触发相应的操作  
    <br>支持异步监听  
    <br>监听的函数接收两个参数，第一个参数是最新的值，第二个是变化之前的值
    <br>当一个属性发生变化时，就需要执行相应的操作
    <br>监听数据必须是data中声明的或者父组件传递过来的props中的数据，当发生变化时，会触发其他操作，函数有两个的参数：
    <br>immediate：组件加载立即触发回调函数
    <br>deep：深度监听，发现数据内部的变化，在复杂数据类型中使用，例如数组中的对象发生变化。需要注意的是，deep无法监听到数组和对象内部的变化。
`