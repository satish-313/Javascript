// Scope variable lifespan

// var 
for (var i=0 ; i < 4 ;i++){}

console.log("the var scope outsde curly bracket =",i)

for (let k = 0;k<4;k++){
    l = 'old'//l is global variable
    const j = "it is const"
}

let k = 'new let updates'
const j = 'new const update'

console.log("the let scope outside curly bracker =", k)
console.log("the const scope outside the curly bracket =",j)
console.log("undefine variable outside curly bracket =",l)

// hoisting 
// var , function 