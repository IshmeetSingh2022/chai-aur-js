let regularUser={
    fullname:{
        username:{
            firstname:"Ishmeet",
            lastname:"Singh"
        }
    }
}

console.log(regularUser.fullname.username.lastname)

let obj1={1:'a',2:'b'}
let obj2={2:'c',4:'d'}
let obj3={5:'e',6:'j'}

// if two or more same keys then last is considered and assign to the first parmeter the objects written after it
let obj4=Object.assign(obj1,obj2,obj3)
console.log(obj4)

console.log(obj1===obj4)
let obj5={...obj3,...obj1,...obj4}

console.log(obj5)

const User=[
    address={
        street:"old charri",
        city:"Dharmashala"
    },
    details={
        name:"Ishmeet",
        age:21
    }
    
]

console.log(User[1].age)
console.log(Object.keys(User))
console.log(Object.values(User))



