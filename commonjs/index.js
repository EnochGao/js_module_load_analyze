
const a = require("./a")
console.log("主程序start")
// const a = require("./a")
console.log('aaaaaaaaaaa', a)
// const a = require("./a") Error
console.log("主程序end")

/**
a模块开始加载
b模块开始加载
a.function:: {}
b.function:: hello b
主程序start
aaaaaaaaaaa { a: [Function: aFunction] }
主程序end
*/