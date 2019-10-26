// let person = {
//     firstname: "太郎",
//     lasname: "山田",
//     age: 18
// };

// let firstname = "hideo";
// let lastname = "kaizuka";
// let age = 31;
// let person = {
//     firstname: firstname,
//     lastname: lastname,
//     age: age
// };
//下記のようにかけるようになった
// let person = {
//     firstname,
//     lastname,
//     age
// }
// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.age);

//computed property name
// let key = "lastanme";
// function getKey(){
//     return "place";
// }
// let person = {
//     firstname: "太郎",
//     [key]:"山田",
//     ["birth"+getKey()]:"東京"

// };
// person[key] = "山田";
// console.log(person);
//プロパティないでjsの処理されている

//メソッド
// let person = {
//     firstname: "太郎",
//     age: 20,
//     getOlder: function(){
//         this.age++;
//     }
// }
//メソッド
// let person = {
//     firstname: "太郎",
//     age: 20,
//     getOlder: () => {
//         this.age++;
//     }
// }
function getName(){
    return "getOlder";
}
let person = {
    firstname: "太郎",
    age: 20,
    [getName()](){
        this.age++;
    }
}
person.getOlder();
console.log(person);