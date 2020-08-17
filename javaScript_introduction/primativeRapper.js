// rapping primative type into the object 
x = 44
console.log(x,' type is : ',typeof x)
//str_x = x.toString() error type is number 

let y = 44
console.log(y, ' type is : ',typeof y)
//str_y = y.toString()
y = y.toString()
console.log(y,'type of : ',typeof y)

console.log(y,'type is number ',y instanceof Number)

// changing the prototype is dengerous
