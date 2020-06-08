// 元组类型
let x  :[string,number]=['hello',10]
console.log(x[0].substr(1))


// 枚举类型
enum Color {Red = 3, Green, Blue}
let colorName: string = Color[2];
console.log(Color)
console.log(colorName);  // 显示'Green'因为上面代码里它的值是2


let a :number = 12


function error(message:string):never{
    throw new Error(message)
}
error('我的天啊')