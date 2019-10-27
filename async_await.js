// asyncとawaitに夜非同期関数

//async = asynchronous
//await = 期待しながら待つ
// let myPromise = new Promise(resolve => {
//     resolve("太郎");
// });
// function main(){
//     let name = myPromise;
//     name;
// }

//非同期関数
// async function main(){
//     let name = await myPromise;
//     name;
// }
// main();

function getName(){
    return Promise.resolve("太郎");
}
function getAge(){
    return Promise.resolve(20);
    // return Promise.reject("エラー発生");
}
// async function main(){
//     let name = await getName();
//     let age = await getAge();
//     name;
//     age;
// }

// async function main(){
//     try{
//         let name = await getName();
//         let age = await getAge();
//         name;
//         age;
//     } catch(err){
//         console.log(err);
//     }
// }

async function main(){
    let [name, age] = await Promise.all([getName(),getAge()]);
    name;
    age;
}
main();
//アロー関数に夜非同期
let myPromise =
(word, sec) => new Promise(resolve => {
    setTimeout(() =>{
        console.log(word);
    },sec);
    resolve();
});

let outputWords = async () => {
    await Promise.all([
        myPromise("For", 4000),
        myPromise("Three", 3000),
        myPromise("One", 1000),
        myPromise("Two", 2000),
    ])
};
outputWords();