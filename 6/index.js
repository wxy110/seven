const myPrimose = new Promise((resolve, reject) => {
    // 把promise由pending状态转换为fulfilled
    setTimeout(() => {
        resolve('钻石')
    }, 3000)
     //reject('可惜不是你')
})
myPrimose.then((value) => {
    console.log(value)
    const myPrimose = new Promise((resolve, reject) => {
        // 把promise由pending状态转换为fulfilled
        setTimeout(() => {
            resolve('钻石')
        }, 3000)
        // reject('可惜不是你')
    })
    // const promise = new Promise(resolve => resolve(1))
    // return promise;
    // return 1;
    return myPrimose;
})
.then((value) => {
    console.log(value)  })