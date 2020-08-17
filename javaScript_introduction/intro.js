// It is the introduction to javaScript
const firstName = "satish";
const lastName = 'pradhan';

const val = 3

const arr = [
    'string', 4 , function(){
        console.log("hi")
    },
]

console.log("my name = ", firstName , lastName)

// below that no output is showed for function
console.log(arr)
// below that output is showed
arr[2]()
//console.log(arr[2]())

for (let i = 0 ; i < arr.length ; i++){
    console.log(arr[i])
    //for understanding the scope of variable
    //let name = "deku"
}

// scope of let valid in curly bracket
//console.log(i)
//console.log(name)


