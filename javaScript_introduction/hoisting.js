// hoisting 
// declare the hoisting
console.log(i)
console.log(thisIsHosting)
thisIsHosting()
//thisIsNotHoisting  reference error
//varAsHoisting() type error

//var as hoisting
var i = "this is hoisted "

//function as hoisting
function thisIsHosting(){
    console.log('this is hoisting')
}

let thisIsNotHoisting = function(){
    console.log('should is hoisted')
}// applied for const

var varAsHoisting = function(){
    console.log('should this hoisted')
}