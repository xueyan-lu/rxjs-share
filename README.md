


### scheduler 调度器

#### 什么是调度器?

根据 官方scheduler文档：

- 调度器是一种数据结构。它可以依据优先级和其它一些配置知道如何来存储队列任务(queue tasks)
- 调度器可以充当执行环境。这表示任务什么时候什么地方执行，是立即执行，还是在回调函数中执行(使用setTimeout, setInterval, 或者 animation frame)
- 调度器拥有一个虚拟时钟。它通过getter方法 now() 提供了time的概念。任务会根据调度安排，在特定的时间执行。

##### 宏任务：

+ setTimeout
+ setInterval
+ setImmediate
+ I/O
+ UI rendering

##### 微任务：

+ process.nextTick
+ Promise
+ MutationObserver

#### 使用调度器?

- Static creation operators & Instance operators
- subscribeOn
- observeOn

### 如何调试

1. https://rxviz.com/examples/mouse-move
2. https://github.com/cartant/rxjs-spy

### 简单的例子

1. longpress
2. drag

### react中使用

1. redux: redux-observable
2. hook: observable-hooks

### 总结

#### rxjs 本身是为了解决异步问题而诞生的, 异步和同步最大的区别就是异步有时序

同步: 数据+函数
异步: 数据+函数+时序

#### rxjs 适用情况：

适用时序密集的应用，那么rxjs能帮你处理复杂的异步逻辑，相反，如果异步之间没有太多的联系，时序简单，则不那么需要使用rxjs。

#### rxjs 优点：

1. 统一不同数据源的能力: http/websocket/user actions
2. 统一不同类型的能力: 异步和同步数据统一操作
3. 丰富的数据加工能力: 各种丰富的operator