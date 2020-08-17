function makeFuctionArray(){
    const arr = []
    //var name = "satish" var scope end at end at function
    //for (var i = 0; i<5 ; i++){
    //    arr.push(function(){console.log(i)})
    //}
    for (let j = 0; j<5 ;j++){
        arr.push(function(){console.log(j)})
    }

    return arr
}
const functionArr = makeFuctionArray()
//console.log(i) reference error
// for case of var below function is i latest value
//for case let below function run [0] index value
functionArr[0]()

