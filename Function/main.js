
 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];

function arrToObj(arr) {
    var index = arr.reduce((accumulator, currentValue) => {
        accumulator[currentValue[0]] = currentValue[1];
        return accumulator;
    }, {});
    return index;
}

console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
