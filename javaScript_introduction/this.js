const person = {
    name: 'stalin',
    greet: function(){console.log('hello ',this.name)}
}

person.greet()

const friend = {
    name:"devil"
}

friend.greet = person.greet

friend.greet()

const greet = person.greet

greet()

const greets = person.greet.bind({name:"satish"})
greets()

person.greet.call({name:"this is call object"})
//greet() this line also undefine name
person.greet.apply({name:"this is appy object"})
// error const applyGreet = person.greet.apply({name:"this is appy object"})

// error applyGreet()

