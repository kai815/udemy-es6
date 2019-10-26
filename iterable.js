//　シンボル
let symbol = Symbol();
symbol;
console.log(typeof symbol);
let symbolA = Symbol("symbol");
let symbolB = Symbol("symbol");
console.log(symbolA === symbolB);
var obj = {
    [symbolA]: "hello, world"
};
console.log(obj[symbolA]);
obj;
// console.log(Object.getOwnPropertyName(obj));
console.log(JSON.stringify(obj));
console.log(Object.getOwnPropertySymbols(obj));

let firstSymbol = Object.getOwnPropertySymbols(obj)[0];
console.log(symbolA === firstSymbol);

//・イテラブル=イテレータを持つオブジェクト(ループ処理できるオブジェクト)
//・イテラブルは、[Symbol.iterator]()で取得できる
//・イテレータはnext()を持つ
//・next()の戻り値はは.valueと.doneを持つ

let message = "Hello";
let iterator = message[Symbol.iterator]();
iterator;
let a = iterator.next();
a;
//doneは最後まで処理するとtrueになる
//iteratorとは順番に処理できるデータのこと
//位置が記録されている
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//next()はforやwhileで行われている

let arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++){
    console.log(i);
}
let iter = arr[Symbol.iterator]();
console.log(iter.next());
//配列の場合自動でiteratorは定義される

let letters = {"a": "あ"};
// let ite = letters[Symbol.iterator]();

let nums = {
    [Symbol.iterator](){
        let data = [1, 2, 3, 4];
        let num = 0;
        return {
            next(){
                return {
                    value: data[num],
                    done: num++ < 4
                }
            }
        }
    }
}
let ite_test = nums[Symbol.iterator]();
console.log(ite_test.next());

// for/ofループ
for (n of arr){
   console.log(n); 
}

for (n of arr){
    console.log(n); 
 }