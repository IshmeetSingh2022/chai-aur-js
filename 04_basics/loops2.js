const arr=[1,2,3,4]
for  (const iterator of arr){
    console.log(iterator)
}


let map=new Map()
map.set('Uk',"United kingdom")
map.set('In','India')
map.set('Us','USA')
map.set('In','In')

for(const [key,val] of map){
    console.log(key,val)
}

const obj1={
    name:"Ishmeet",
    age:21
}
const st="Ishmeet Singh"

for(const iterator of st){
    console.log(iterator)
}

// objects are not iterable
// for(const [key,val] of obj1){
//     console.log(key)
// }


// so we use for in loop for objects

// Loop	Works on Map?	Why
// for...in	❌ No	Iterates object properties
// for...of	✅ Yes	Iterates iterable entries

for(const key in obj1){
    console.log(key,obj1[key])
}

for(const keys in arr){
    console.log(arr[keys])
}

//  for in loop iterates on keys only it doesnt work for map

arr.forEach((items)=>{
    console.log(items)
})

arr.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const arr2=[
    {
        language:"pyhton",
        lib:"py"
    },{
         language:"java",
         lib:"js"
    },{
         language:"cpp",
        lib:"c"
    },
    {
        language:'c++',
        lib:'c'
    }
]

arr2.forEach((item)=>{
    for(const key in item){
        console.log(item[key])
    }
})

// for each doestnt return anything

let temp1=arr.filter((num)=>num>1)
console.log(temp1)

let temp2=arr2.filter((item)=>{
   return (item.lib==='c'&&item.language==='c++')
})

console.log(temp2)

let arr4=[1,2,3,4,5,6,7]

// map creates a new array and add values to it and Original array stays unchanged
// ✔️ New transformed array is returned
let temp3=arr4.map((item)=>{
   return item+10
})
console.log(temp3)

// forEach->It does NOT return anything

// It does NOT create a new array

// item is just a copy of the value, not the array element itself

// let temp4=arr4.forEach((item)=>{
//     item=item+2
// })

console.log(arr4)

let temp4=arr4.map((item)=>{
    return item*10
}).map((item)=>{
   return item+1
}).filter((num)=>{
     return num>40
})

console.log(temp4)


const arr6=[32,45,133,56]

// reduce function is for adding items in array accumulator takes inital value from 2nd argument 
let temp7=arr6.reduce((acc,item)=>{
return acc+item
},0)

console.log(temp7)


const objx=[

    {price:43},
    {price:12},
    {price:2201},
    {price:2}
]

let t=objx.reduce((acc,item)=>
acc+item.price ,0
)

console.log(t)
