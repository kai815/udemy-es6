const nums = [1, 2, 3, 4];
// ...
nums;
function appendNum(users){
    users.forEach(function(user){
        return nums.push(user.num);
    });
}
appendNum([{num:10}]);
nums;

//関数スコープ
if(true){
    let tes = 2;
    tes;
}

//ブロックスコープ
{
    let x = 1;
    x;
    {
        let x = 2;
        x;
    }
    x;
}
