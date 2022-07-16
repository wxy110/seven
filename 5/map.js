Array.prototype.arrIt2 = arrIt2

function arrIt2(callback) {
    //for (let i = 0; i < this.length; i++) {
     //   callback(this[i], i, this)
   // }
}
const iteratorArray = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < iteratorArray.length; i++) {
     console.log(iteratorArray[i])
}
function test(value, index, arr) {
    console.log(value, index, arr)
}
// // 原生方法
 //iteratorArray.forEach(test);
// // 山寨方法1
//arrIt(iteratorArray, test)
// 山寨方法2
// iteratorArray.arrIt2(test)

// 平台api实现了一边
function arrIt(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

const arr4 = [1, 2, 4, 5]
function test4(value) {
    const i = value + 1;
    return i
}
const arr4back = arr4.map(test4)
console.log(arr4, arr4back)

const objArr = [
        { name: 'pjw', age: '' },
         { name: 'xxx', age: '' }
    ]
    // const testJian = () => 1;
    //console.log(testJian())
     //const result=objArr.find(item => item.name === 'pjw')
     //console.log(result)
     const arr7 = [1, 2, 4, 5, 6, 7, 8, 9]
arr7.slice(4, 6)
    //.map(item => item + 1)
    .forEach(item => console.log(item))