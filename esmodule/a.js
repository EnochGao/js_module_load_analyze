
console.log("a模块加载")

console.log("bs::", bs)

import b, { bs } from "./b.js"

export const as = 'aaaaaaaaaaaaaaa'

export const af = function () {

}

console.log("b.function::", b())


export default function aHello() {
  return "hello a"
}