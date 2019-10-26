// //分割代入
// var numbers = [1,2,3,4,5];
// //従来の
// // var a = numbers[0];
// // var b = numbers[1];
// // var c = numbers[2];
// // var d = numbers[3];
// // var e = numbers[4];

// //ECMA
// let [a, b, c, d, e] = numbers;
// //一部でいい場合
// // let [, , c, d, e] = numbers;
// [c, d] = [a, b];
// a;
// b;
// c;
// d;
// e;

// function getConfig() {
//     return [
//         true,
//         10,
//         1,
//         2,
//         3
//     ]
// }
// //従来
// // const config = getConfig();
// // console.log(config[0]);
// // console.log(config[1]);

// const [isOn, amount, ...data] = getConfig();
// isOn;
// amount;
// data;

// let _isOn = false;
// let _amount = 10;
// //従来
// // function setConfig(config){
// //     _isOn = config[0];
// //     _amount = condig[1];
// // }
// function setConfig([isOn, amount]){
//     _isOn = isOn;
//     _amount = amount;
// }
// setConfig([
//     true,
//     20
// ]);
// _isOn;
// _amount;

//オブジェクトの分割代入
// function getConfig(){
//     return{
//         isOn: true,
//         amount: 10,
//         hello: "Hello, world!",
//         shouldDelete: true
//     }
// }
//従来
// var config = getConfig();
// var isOn = config.isOn;
// var amount = config.amount;
// isOn;
// amount;
//※必ずプロパティメイト同じである必要がある
// x var {a,b} = getConfig();
// var {isOn, amount} = getConfig();
// isOn;
// amount;
//飛ばして取得もできる
// var {hello, shouldDelete} = getConfig();
// hello;
// shouldDelete;


var config = {};
//従来
// function setConfig(isOn, amount){
//     config.isOn = isOn;
//     config.amount = amount;
// }
// setConfig(true, 10);
//config;
//ECMA
// function setConfig({isOn, amount}){
//     config = {
//         isOn,amount
//     };
// }
// setConfig({
//     isOn: false,
//     amount: 20
// });
// config;

//任意の変数名
// function getConfig(){
//     return {
//         isOn: true,
//         amount: 10,
//         servers: {
//             a: "abcd",
//             b: "efgh"
//         }
//     }
// }
// //:の左がプロパティ名で右が任意の変数名
// let {
//     isOn: onOffInfo,
//     amount: dataAmount,
//     servers: {
//         a: ServerA
//     }
// } = getConfig();
// onOffInfo;
// dataAmount;
// ServerA;

//デフォルト
const arr = [1];
let [a,b=2000] = arr;
a;
b;

const obj = {
    isOn: true,
    amount: 10
};
var {isOn: serverOn, amount=1000} =obj;
serverOn;
amount;