const x = [0,1,2,3]

function addOne (number){
    return number + 1
}
console.log("before the maps ",x)
console.log(x.map(addOne))

function isGreatherThanOne (num){
    return num > 1
}

console.log(x.filter(isGreatherThanOne))

function add(a,b) {return a+b}

console.log(x.reduce(add))