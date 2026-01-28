// falsy values

// 0 ,-0 ,"",false,NaN,undefined,Null,bigInt 0n

// truthy values

// "0"," ",'false',[],{},function(){}

arr=[]
obj={}
if(arr.length===0) console.log("array is empty");

if(Object.keys(obj).length===0) console.log("Object is empty");

// Nullish coalence operator ?? -> for null and undefined only

let var1=null ?? 10 

let var2=null?? undefined ?? 15
console.log(var1,var2)

// terinary operator ?

const tea=100

tea<50?console.log("yes"):console.log("no")