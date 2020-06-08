"use strict";
// 元组类型
var x = ['hello', 10];
console.log(x[0].substr(1));
// 枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(Color);
console.log(colorName); // 显示'Green'因为上面代码里它的值是2
var a = 12;
function error(message) {
    throw new Error(message);
}
error('我的天啊');
