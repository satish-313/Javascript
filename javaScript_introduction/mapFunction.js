const arr = [0,1,3,5,6,2]

function addTwo (num) {return num + 2}

function maps (array,fun){
    const newarray = []
    for (let i=0;i<array.length;i++){
        let value = fun(array[i])
        newarray.push(value)
    }
    return newarray
}

function map1 (arr,fun) {
    const newArr = []
    arr.forEach(function(val){
        newArr.push(fun(val))
    })
    return newArr
}
console.log(arr)
console.log(maps(arr,addTwo))

function module(num) {
    return num % 2
}

console.log(map1(arr,module))