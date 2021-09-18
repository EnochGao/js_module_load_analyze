
const b = require("./b")

console.log("a模块开始加载")

console.log("b.function::", b.b())

exports.a = function aFunction() {
  return "hello a"
}