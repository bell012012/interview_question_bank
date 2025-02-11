export const ts19 = `
    <br>基本类型：boolean、number、string、bigint、symbol、null、undefined
    <br>特殊类型：any、unknown、never、void
    <br>对象类型：数组、元组、枚举、对象字面量
    <br>组合类型：联合类型、交叉类型
    <br>字面量类型
    <br>自定义类型和高级类型：类型别名、接口、泛型、条件类型、映射类型等
    <br>boolean：布尔值，true 或 false。
    <br>number：数字类型，包括整数和浮点数（以及特殊值 NaN 和 Infinity）
    <br>string：字符串类型。
    <br>null 和 undefined：分别表示“无值”和“未定义”。
    <br>bigint：用于表示非常大的整数
    <br>symbol：用于生成独一无二的标识符。
    <br>any：任意类型，关闭了类型检查，适合暂时不确定类型的场景。
    <br>unknown：表示未知类型，比 any 更安全，因为在使用 unknown 类型的值之前需要进行类型检查。
    <br>never：表示永远不会发生的值，比如一个总是抛出异常的函数或无限循环的函数。
    <br>void：通常用于函数没有返回值的情况。
    <br>数组：例如 number[] 表示由数字构成的数组。
    <br>元组 (Tuple)：具有固定长度和类型的数组。
    <br>枚举 (Enum)：定义一组命名常量。
    <br>对象字面量：直接定义对象的结构。
    <br>联合类型 (Union)：表示一个值可以是多种类型之一
    <br>交叉类型 (Intersection)：表示将多个类型合并为一个类型，要求必须同时满足所有类型的约束。
    <br>字面量类型：指定变量只能取某个具体的值，常用于联合类型中。
    <br>类型别名 (Type Alias)：为类型取一个新名字，方便复用。 
    <br>接口 (Interface)：用于定义对象的形状，可继承和实现，通常用于描述类、函数等结构。
    <br>泛型 (Generics)：用于创建可重用的组件或函数，能够捕获类型并在使用时指定。
    <br>条件类型、映射类型等：用于处理更复杂的类型转换和操作，是 TypeScript 类型系统的高级特性。
`
export const ts20 = `
    将相关的代码分组到一个命名空间内，避免全局作用域中的命名冲突。命名空间类似于模块化，但在 TypeScript 中，命名空间和模块是两种不同的概念。
    <br>namespace MyNamespace {
    export const name = "TypeScript";
    export function greet() {
        console.log(Hello from nam});
    }
    }
    // 访问命名空间中的成员
    MyNamespace.greet(); 输出: Hello from TypeScript
    console.log(MyNamespace.name); 输出: TypeScript
    <br>3. 命名空间与模块的区别
    <br>命名空间：
    <br>主要用于组织代码，避免全局命名冲突。
    <br>使用 namespace 关键字定义。
    <br>适用于较小的项目或浏览器环境。
    <br>模块：
    <br>是 ES6 的标准特性，用于组织代码和依赖。
    <br>使用 import 和 export 关键字。适用于大型项目或 Node.js 环境
`