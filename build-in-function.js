//Object.assingn()
let obj1 = {};
let obj2 = {name: "太郎"};
let obj3 = {location: "東京", age:30}
//従来のもの
// Object.keys(obj2).forEach(function(key){
//     obj1[key] = obj2[key];
// });
//ECMA
Object.assign(obj1, obj2, obj3);
// 戻り値として取得も可能
let obj4 = Object.assign({}, obj2, obj3);
obj1;
obj4;

//String.repeat()
//従来
// let string = Array(10).fill("*").join("");
//ECMA
let string = "*".repeat(10);
string;

//String.includes()
//String.endsWith()
//String.startsWith()
let message = "Hello, world!";
let substring = "";
//従来の
// let index = message.indexOf(substring);
// //存在しないと-1が返ってくる
// index;
//ECMA
// let answer = message.includes(substring);
// let answer = message.endsWith(substring);
//endsWith　空文字でもtrueになるのは要注意
let answer = message.startsWith(substring);
//startssWithも　空文字でもtrueになるのは要注意
answer;

//Array.find()
//Array.findIndex()
let arr = [1, 20, 30, 10, 5];
let result1 = arr.filter(number => {
    return number > 20;
})
let result2 = arr.find(number => {
    return number > 100;
})
let result3 = arr.findIndex(number => {
    return number > 20;
})
result3;

//Math.trunc() :truncateが由来
function trunc(x){
    return (x < 0 ? Math.ceil(x) : Math.floor(x));
}
console.log(trunc(-42.195));
console.log(trunc(30.195));
console.log(Math.trunc(-42.195));
console.log(Math.trunc(30.195));

//Math.sigin()
console.log(Math.sign(100));

//Number.isNan()
//Number.isFinite()

var i;
i++;
i;
console.log(i);
console.log(i !== NaN);
console.log(Number.isNaN(i));

// infinity = 無限
// infinite = 無限の〜
// finite = 有限の〜
var i = 1 / 0;
i;
console.log(i === Infinity || i === -Infinity);
console.log(Number.isFinite(i));
//数字以外でもfalseとなる

// Number.isSafeInteger

// IEEE754倍精度数
console.log(Number.isSafeInteger(NaN));
console.log(Number.isSafeInteger(Infinity));
console.log(Number.isSafeInteger("1"));
console.log(Number.isSafeInteger(10000000000000000));
console.log(Number.isSafeInteger(3.1));