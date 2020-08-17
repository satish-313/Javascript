const o = {
    a : 'a',
    b : 'b',
    obj : {
        key : 'old key'
    }
}

//const o2 = o
//o.a = 'new value'

//console.log(o2.a)

//const o3 = Object.assign({},o)
//o3.a = 'new value'
//console.log(o.a)
//console.log(o3.a)

//o3.obj.key = 'new key'

//console.log(o.obj.key) // because of shollow copy

// deep copy
function deepCopy (obj){
    const keys = Object.keys(obj)

    const newObject = {}
    
    for (let i = 0 ; i<keys.length; i++){
        const key = keys[i]
        if (typeof obj[key] === 'object'){
            newObject[key] = deepCopy(obj[key])
        }
        else{
            newObject[key] = obj[key]
        }
    }
    return newObject
}

const o4 = deepCopy(o)
console.log(o4.obj.key)
o.obj.key = 'new key'
console.log(o4.obj.key)
o.a = 'new a'
console.log(o4.a)