
console.log("b模块开始加载")

const a = require("./a")

console.log("a.function::", a)


exports.b = function bFunction () {
  return "hello b"
}