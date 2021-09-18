
console.log("b模块开始加载")


export const bs = 'bbbbbbbbbbbbbbbb'

// console.log("as::", as)
// console.log("af::", af)
console.log("a.function::", a())

import a, { as, af } from "./a.js"

export default function bHello() {
  return "hello b"
}