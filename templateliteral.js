//テンプレートリテラル

//` -バックオート、バックティック

// let name = '太郎';
// let age = 18;
// let message = "私の名前は" + name + "で、\n"+age+"歳です。";
// let new_message = ` 私の名前は${name}で、
//  ${age}歳です。`;
// message;
// new_message;

//$と{}の事をエクスプレッション
//バッククオートを使用すると直感的に文字列を扱える

//関数も扱える
let foods = ["卵", "納豆", "豆腐"];
let foods_message = `私が好きな食べ物は、${foods
    .map(function(foods){
        return `「${foods}」`
    })
    .join("、")}`;
console.log(foods_message);

//タグ付きテンプレート(taggged template)リテラル
// function output() {
//     console.log(arguments);
// }
// function output(string, ...values) {
//     console.log(string);
//     console.log(values);
// }
// output("a", "b");
// output`"a", "b"`;
// let name = '太郎';
// let age = 18;
// const message = output ` 私の名前は${name}で、${age}歳です。`;
// console.log(message);
// let message = ` 私の名前は${name}で、${age}歳です。`;
// output (message);

//どんな時に役立つか？
// function output(string, ...values) {
//     let message = "";
//     string.forEach((string, index) => {
//         message += string;
//         if(index < values.length){
//             message += `<b>${values[index]}<b>`;
//         }
//     });
//     return message;
// }

function output(string, ...values){
    //「\n」は改行される
    console.log(string[0]);
    //「\n」が改行されない
    console.log(string.raw[0]);
}
output`私の名前は太郎です。\n18歳です。`
//String.raw``
console.log(String.raw`あいう\nえお`);