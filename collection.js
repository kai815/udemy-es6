//イテラブル、コレクション
//セット,マップ
// let arr1 = [1,2,3];
// arr1;
// let arr2 = new Array(4,5,6,);
// arr2;
// let set1= new Set([1,2,3]);
// set1;
// let set2 = new Set("あいうえお");
// let [a,b,c] = set2;
// a;
// b;
// c;
// console.log(set1.size);

//セットはデータの重複を許さない
let set1 = new Set([1,2,3,3]);
set1;
let set2 = new Set("あいうえおあいうえ");
set2;

console.log(set1.keys());
let [a,b,c] = set1.keys();
a;
b;
c;
console.log(set1.values());
let [d,e,f] = set1.values();
d;
e;
f;
let [g, h, i] = set2.entries();
g;
h;
i;

for (let i of set1){
    console.log(i);
}

set1.forEach( value => {
    console.log(value);
})

set1.add(10);
set1;
set1.delete(2);
set1;
set1.clear();
set1;
console.log(set2.has("あ"));

let map1 = new Map([[1, "a"], [2, "b"], [3, "c"]]);
map1;
let obj1 = {'あ':'a', 'い':'i', 'う':'c'};
console.log(map1.get(1));
map1.set(4, "d");
map1;
console.log(map1.size);
map1.delete(4);
map1;
console.log(map1.has(4));
map1.clear();
map1;

let map2 = new Map([[3, "a"],[NaN, "b"], [Infinity, "c"],[undefined, "d"], [true, "e"], [{}, "f"]]);
map2;

for (let i in obj1){
    console.log(obj1[i]);
}

for (let i of map2.keys()){
    console.log(i);
}

for (let i of map2.values()){
    console.log(i);
}

for (let i of map2.entries()){
    console.log(i);
}

for (let [key, value] of map2){
    console.log(key);
    console.log(value);
}

map2.forEach((value, key) => {
    console.log(value);
    console.log(key);
});

//WeakMap, WeakSet

// 
let map = new Map();
let weakMap = new WeakMap();

(function(){
    let a = {x: 1};
    let b = {y: 1};
    map.set(a, 100);
    weakMap.set(b, 200);
}());
//garbage collection
map;
weakMap;
