function makeFuctionArray(){
    const arr = []
    for (var i = 0; i<5 ; i++){
        arr.push((function(x){
            return function () {console.log(x)}
        })(i))
    }

    return arr
}
const functionArr = makeFuctionArray()
functionArr[0]()


