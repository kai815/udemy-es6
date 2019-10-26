//デフォルト引数
// function buy(item, amount){
//     //従来の対処法
//     if(amount === undefined){
//         amount = 1;
//     }
//     item;
//     amount;
// }

function buy(item, amount=1){
    item;
    amount;
}
//デフォルトの値の型に制限はないobjectや配列ok
buy("eggs");

//レスト演算子(...仮引数名)
//不特定多数の引数
// function print(){
//     console.log(arguments);
//     //argumentsはIterator扱い
// }
// function print(){
//     //配列にする
//     var arr = Array.prototype.slice.call(arguments);
//     console.log(arr);
//     //argumentsはIterator扱い
// }

//上記を簡単にできる
// function print(...arr){
//     console.log(arr);
// }
// 部分的にも使用可
function print(ele1, ele2, ...arr){
    ele1;
    ele2;
    console.log(arr);
}
print(1, "a", true, {}, [1,2,3]);
//レスト演算子の注意点:後ろに引数を使えない

//スプレッド演算子(...配列名)
//※配列をより柔軟に扱うためのもの


// var arr = ["Hello, ", "world!"];
// arr = ["<br>"].concat(arr).concat(["<br>"]);
// console.log(arr.join(""));

//スプレッド演算子を使えば上記のことが直感的にできる
var arr = ["Hello, ", "world!"];
arr = ["<br>", ...arr, "<br>"];
console.log(arr.join(""));

const message = "Hello, world!";
const chars = [...message];
chars;

function add(a, b){
    return a+b;
}
var arr = [1,2];
console.log(add(...arr));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = ["a", ...arr2, true, {}, ...arr1];
// arr1.push(...arr2);
// arr1.unshift(...arr2);
arr3;

let array1 = [1, 2, 3];
let array2 = [...array1];
array2;

let [a, b, ...array] = [1, 2, 3, 4, 5];
a;
b;
array;
//スプレッド演算子で配列の扱いはかなり自由になる