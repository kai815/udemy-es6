//アロー関数
const array = [1, 2, 3, 4];
array;
//従来
// const byTwo = array.map(function(number){
//     return number * 2;
// });

//アロー関数に置き換えると
// const byTwo = array.map((number) => {
//     return number * 2;
// });
//引数が1つの場合は()を省略できる
// const byTwo = array.map(number => {
//     return number * 2;
// });
//引数が2つの場合は()を省略できない
// const byTwo = array.map((number,index) => {
//     return number * index;
// });
//引数がない場合でも()は必要
// const byTwo = array.map(() => {
//     return 2;
// });
//処理が1文しかない場合{}とreturnも省略可能
//{}を省略すると背後でreturnが処理されるようになる
// const byTwo = array.map((number) => number *2);

//上記のやり方でオブジェクトを戻り値にするときは()で囲う
const byTwo = array.map((number) => ({number:number *2}));
byTwo;

//thisの挙動
// let obj = {
//     value:0,
//     increment: function (){
//         setTimeout(function(){
//             this.value++;
//             //thisはobjのvalueを参照しているのではなく、setTimeoutの中のコールバックを参照してる
//             console.log(this.value);
//         },1000);
//     }
// };
//解決するやり方1直接参照する
// let obj = {
//     value:0,
//     increment: function (){
//         setTimeout(function(){
//             obj.value++;
//             console.log(obj.value);
//         },1000);
//     }
// };
//解決するやり方2新しい変数に代入
// let obj = {
//     value:0,
//     increment: function (){
//         var that = this;
//         setTimeout(function(){
//             that.value++;
//             console.log(that.value);
//         },1000);
//     }
// };
//解決するやり方3bind関数
// let obj = {
//     value:0,
//     increment: function (){
//         setTimeout(function(){
//             this.value++;
//             console.log(this.value);
//         }.bind(this),1000);
//     }
// };
//どれをやるにしても一手間かかるけど
//アロー関数だと
// let obj = {
//     value:0,
//     increment: function (){
//         setTimeout(()　=> {
//             this.value++;
//             console.log(this.value);
//         },1000);
//     }
// };
//thisは親スコープを参照
//アロー関数のthisは親スコープのthisを引き継ぐ
//アロー関数のデメリット：argumentsには使えない、コンストラクタには不向き
//上記の場合、従来の無名関数を使用する必要がある
//incmentもアロー関数に変更
this.value = 0;
let obj = {
    value:0,
    increment: ()　=> {
        setTimeout(()　=> {
            this.value++;
            console.log(this.value);
        },1000);
    }
};
//thisはさらに上のグローバルから参照を引き継ぐ
obj.increment()
