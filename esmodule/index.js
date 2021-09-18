
console.log("主程序start")
console.log('加载a', a)

import a from "./a.js"
console.log("主程序end")


/*
b模块开始加载
a.function:: hello a
a模块加载
bs:: bbbbbbbbbbbbbbbb
b.function:: hello b
主程序start
加载a [Function: aHello]
主程序end
*/