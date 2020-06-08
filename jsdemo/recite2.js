//10：函数柯里化
// 柯里化是函数式编程的一个重要技巧，将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
function curry(fn) {
    if (fn.length < 1) {
        return fn
    }
    const generator = (...args) => {

    }
}

// 14:实现函数bind方法


// 15:实现函数 call 方法
// 原理就是将函数作为传入的上下文参数（context）的属性执行，这里为了防止属性冲突使用了 ES6 的 Symbol 类型
const selfCall = function(context, ...args) {
    let func = this
    context || (context = window)
    if (typeof(context) !== 'function') {
        throw new TypeError('This is not a function')
    }
    let caller = Symbol('caller')
    context[caller] = func
    let res = context[caller](...args)
    delete context[caller]
    return res
}