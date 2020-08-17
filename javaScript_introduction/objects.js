const o = new Object()

o.firstName = 'satish'
o.lastName = 'pradhan'
o.howAreYou = true
o.greet = function(){
    console.log("hi")
}

const o2 = {}
o2.firstName = 'satish'
o2['lastName'] = 'pradhan'
const key = "isTeaching"
o2[key] = true
o2['greet'] = function(){
    console.log("hi")
}

const o3 = {
    firstName : 'satish',
    lastName : 'pradhan',
    isTeaching : true,
    greet : function(){
        console.log('hi')
    },
    address : {
        street : 'main st',
        code  : 1234
    }
}

console.log(o.firstName)
console.log(o2.lastName)
console.log(o3.greet)
console.log(o3.greet())
console.log(o3.address.code)