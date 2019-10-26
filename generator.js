//ジェネレータ
//イテレータの知識必要

// 1.function*を使って宣言
// 2.中でyieldを使う
// function* myGenerator(){
//     console.log("あ");
//     yield 1;
//     console.log("い");
//     yield 2;
//     console.log("う");
//     yield 3;
// }
// let iter = myGenerator();
// iter;
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// //より複雑なイテレータを扱う

let obj = {
    * myGenerator(){
        yield 1;
    }
}
let iter = obj.myGenerator();
console.log(iter.next());

//フィボナッチ数列

function* fibonacci(){
    let n1 = 0;
    let n2 = 1;
    while(true){
        let current = n1;
        n1 = n2;
        n2 = current + n1;
        let reset = yield current;
        if (reset){
            n1 = 0;
            n2 = 2;
        }
    }
}
let fibo = fibonacci();
console.log(fibo.next());
console.log(fibo.next());
console.log(fibo.next());
console.log(fibo.next());
console.log(fibo.next());
console.log(fibo.next());
console.log(fibo.next());
console.log(fibo.next());
console.log(fibo.next());
console.log(fibo.next());
console.log(fibo.next());
console.log(fibo.next());
//リセット
console.log(fibo.next(true));
console.log(fibo.next());
console.log(fibo.next());
console.log(fibo.next());
console.log(fibo.next());

function* myGenerator(){
    yield*[1,2,3];
    yield "Hello"
}
let iterator = myGenerator();
// console.log(iterator.next());
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
console.log([...iterator]);