// singleton -> Object.create()

// object literals


// Symbol creates a UNIQUE value (even if description is same)
const mykey1 = Symbol("key1")
console.log(mykey1) // Symbol(key1)

const JsUser = {

    username: "Ishmeet",
    age: 21,

    // Using Symbol as an object key
    // Square brackets are REQUIRED, otherwise it becomes a string key
    [mykey1]: "hello",

    email: "ishmeet@google.com",

    // Keys with spaces must be written as strings
    "current location": "shimla",

    isLoggedIn: true,
    lastLoggedIn: ["Saturday", "Thursday"]
}

// Accessing normal properties using dot notation 
// Every key is stored as a string internally except for symbols 
console.log(JsUser.age)

// Accessing properties using bracket notation
console.log(JsUser["username"])

// Dot notation CANNOT be used for keys with spaces
console.log(JsUser["current location"])

// Accessing Symbol-keyed property
// Dot notation does NOT work with Symbols
// Bracket notation is mandatory
console.log(JsUser[mykey1])

console.log(Object.keys(JsUser))
// symbols are not printed nor can be accessed via for loop

JsUser["email"]="janad@123"

console.log(JsUser["email"])
// Object.freeze(JsUser)
// changes made to any key including symbol will not be reflected
JsUser["email"]="hello@1231"
JsUser[mykey1]=322
console.log(JsUser["email"])
console.log(JsUser[mykey1])


JsUser.greeting2=function(){
    console.log(`Hello World ${this.username}`)
}
JsUser.greeting2()
