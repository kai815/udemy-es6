//モジュール化
//.jsはなくてもいい
//quokkaの無料版はimportが使えないようなのでnodeで実行
//実行するためには拡張子.mjsで--experimental-modulesオプションが必要
// import {add} from './add';
// let value = add(3,2);
// console.log(value);
// エイリアス　※偽名という意味らしい
// import {
//     add as myAdd,
//     sub as mySub,
//     someone as guy
// } from './add';
// let value = myAdd(3,2);
// console.log(value);
// let value2 = mySub(8,3);
// console.log(value2);
// console.log(guy);

//ワイルドカード(*)
// import * as myAll from "./add";
// let value = myAll.sub(3,2);
// let value2 = myAll.mul(3,3);
// console.log(value);
// console.log(myAll.someone);
// console.log(value2);

//default
//{}とasなしでエイリアスを指定できる
//defaultは一度しか使用できない
import myAll from "./add"
console.log(myAll);
let value = myAll.add(10, 5);
console.log(value);