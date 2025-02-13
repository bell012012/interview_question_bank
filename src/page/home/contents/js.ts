export const js8 = `
    async/await是Promise 语法糖
    <br>Promise 三种状态：pending（进行中）：初始状态，异步操作尚未完成
    <br>fulfilled（已完成）：异步操作成功，返回 resolve
    <br>rejected（已失败）：异步操作失败，返回 reject
    <br>方法：.then()用于处理resolve的结果
    <br>.catch()用于处理 reject 的结果
    <br>.finally()无论 resolve 还是 reject 都会执行
    <br>.all() 同时执行多个 Promise，所有成功才算成功，有一个失败就 reject
    <br>.allSettled() 所有 Promise 结束后（无论成功或失败）返回所有结果
    <br>.race() 只要有一个 Promise 结束（成功或失败）就返回   最快完成的 先返回
    <br>.any() 只要有一个成功就返回，全部失败才会 reject    第一个成功的 先返回
`