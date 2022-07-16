function day(msg){
    console.log(msg)
}  
const paramsWapper ={
    callback:day
}
handle(paramsWapper)

function handle(object){
    const str ='这是第一次传递'
    object['callback'](str)

}
