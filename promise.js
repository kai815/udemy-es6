//Promise（プロミス）
// var func_one = function(){
//     console.log("The first ...");
// };

// var func_two = function(){
//     console.log("the second ...");
// };

// var func_three = function(){
//     console.log("... the third!");
// }
// func_one();
// func_two();
// func_three();

//同じことを非同期
var func_one = function(callback){
    console.log("The first ...");
    console.log(callback);
    if(callback){
        callback();
    }
};

var func_two = function(callback){
    console.log("the second ...");
    console.log(callback);
    if(callback){
        callback();
    }
};

var func_three = function(callback){
    console.log("... the third!");
    // console.log(callback);
    if(callback){
        callback();
    }
}
//非同期だとコールバックの中にコールバックを記述する
//コールバック地獄に陥りがち
func_one(function(){
    func_two(function(){
        func_three();
    })
});

//Promiseは従来のコールバックに置き換わる非同期を行うのが目的
// function getName(){
//     setTimeout(() => {
//         console.log("Johndoe");
//     }, 2000)
// }
// function getName(){
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve("Johndoe");
//         }, 2000);
//     })
// }

// function getAge(){
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve(20);
//         }, 4000);
//     });
// }

// getName().then(name =>{
//     console.log(name);
// });

// 1.Promiseをnewする中ですべての処理を行う
// 2.処理の終わりに、結果を第一引数のresolve()に渡す
// 3.Promiseオブジェクトのthenメソッドの第一引数で、結果を受け取る

//メソッドチェーン
// getName()
// .then(name =>{
//     console.log(name);
//     // return getAge();
// })
// .then(getAge)
// .then(age =>{
//      console.log(age);
// });

//Promise.all()
//関数を配列で渡す
// Promise.all([
//     getName(),
//     getAge()
// ])
// .then(([name, age]) => {
//     console.log(name);
//     console.log(age);
// });

// function getName(){
//     return new Promise((resolve, reject) =>{
//         //catchされるのはrejectだけじゃない
//         // setTimeout(() => {
//         //     reject("エラーが発生しました");
//         // }, 2000);
//         // throw new Exception("エラー発生！");
//         // throw new Error("エラー発生！");
//         let obj = {};
//             obj.x.y;
//     })
// }

// function getAge(){
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve(20);
//         }, 4000);
//     });
// }

// //※あらゆるエラーをcatchメソッドで取得できる
// getName()
// .then(name =>{
//     console.log(name);
//     // return getAge();
// })
// .catch(err =>{
//      console.log(err);
//      return "Catch";
// })
// .then(value => {
//     console.log(value);
//     console.log("Finally");
// })


//Promiseの補足
let myPromise = 
(word,sec) => new Promise(resolve =>{
    setTimeout(() => {
        console.log(word);
    },sec);
    resolve();
    //*このresolveがないと嗣に繋がらない
});
myPromise("hello", 1000)
.then(() => myPromise("world",2000))
.then(() => myPromise("again",3000))

function getName(){
    // return new Promise(resolve => {
    //     resolve("太郎");
    // });
    //ただデータを渡すだけなら下記のようにも書ける
    return Promise.resolve("太郎");
}
getName().then(name => {
    console.log(name);
})