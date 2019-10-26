// //クラスの宣言
// //従来のjsのクラス
// // var Person = function(name, age){
// //     this.name = name;
// //     this.age = age;
// // }

// // var person = new Person("kaizuka",31);
// // person;
// // //メソッドを加える
// // Person.prototype.jump = function() {
// //     console.log("ジャンプ!!");
// // }
// // person.jump();

// //ECMAの書き方
// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     //functionは不要でメソッド名
//     jump(){
//         console.log("ジャンプ!!");
//     }
//     getName(){
//         return this.name;
//     }
//     static setName(person,name){
//         person.name = name;
//     }
// }
// let person = new Person("hideo", 31);
// person;
// person.jump()
// //Javaと似てる

// //クラスの継承
// //ECMAになってやりやすくなった

// class Employee extends Person{
//     //親クラスのコンストラクタも呼びだなくてはならない
//     constructor(name, age, years){
//         super(name, age);
//         this.years = years;
//     }
//     jump(){
//         //親クラスのメソッドも使用できる
//         super.jump();
//         console.log("変更ジャンプ！！");
//     }
//     quit(){
//         console.log("やめます。");
//         this.years = 0;
//     }
//     getName(){
//         return super.getName() + "従業員";
//     }
    
// }
// let employee = new Employee("HIDEO", 31, 15);
// employee;
// employee.jump();
// employee.quit();
// employee;
// let name = employee.getName();
// console.log(name);

// //静的メソッド
// Person.setName(employee, "静太郎");
// employee;

//ゲッターとセッター
class Person {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    get name(){
        return "「"+this._name+"」";
    }
    set name(name){
        this._name = name;
    }
}
let person = new Person("太郎", 20);
person;
let name = person.name;
name;
person.name = "二郎";
person;
console.log(person._name);