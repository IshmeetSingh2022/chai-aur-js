new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async task is completed')
        resolve()
    },1000)
    
}).then(()=>{
    console.log('Promise resolved')
})

const promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:'Ishmeet',age:21})
    }, 1000);
})

promise2.then((obj)=>{
    console.log(obj)
})


const Promise3=new Promise((resolve,reject)=>{
    let error=true
    if(!error){
         resolve({username:'kavan',age:22})
    }
    else{
        reject('Something went wrong')
    }
})

Promise3.then((user)=>{
return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
console.log(error) 
}).finally(()=>{
    console.log('the promise is either resolved or rejected')
})


const Promise4=new Promise((resolve,reject)=>{
    let error=true
    if(!error){
         resolve({username:'kavaasdadn',age:22})
    }
    else{
        reject('Js went wrong')
    }
})

async function fetchPromise4(){
    try{
    const resp=await Promise4
    console.log(resp)
    }
    catch(err){
        console.log(err)
    }
}

fetchPromise4()


async function fetchUser(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}

fetchUser()


fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
