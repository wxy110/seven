function callback1(res) {
    console.log(res)
}

function callback2() {
    
}

function callback3() {
    
}





// Object
const paramsWrapper = {
    data: '一段很大的文字',
    success: callback1,
    fail: callback2,
    complete: callback3
}
function callback4(res) {
    console.log(res)
}

// 传递对象
handle(paramsWrapper)






function handle(object){
    const str = 'success'
    paramsWrapper['success'](str)
}


