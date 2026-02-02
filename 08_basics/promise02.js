// const asyncFunc1=()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log('data1')
//             res('promise 1 resolved')
//         },4000)
//     })
// }

// const asyncfunc2=()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log('data2')
//             res('Promise 2 resolved')
//         },4000)
//     })
// }

// console.log('fetching data 1')
// asyncFunc1().
// then((res)=>{
// console.log('fetching data2',res)

// asyncfunc2().
// then((res)=>{
// console.log('fetching data2',res)
// })
// })



// function getData(data){
// return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log(data)
//         res(`${data} resolved`)
//     },2000)
// })
// }

// getData('ishmeet').
// then((res)=>{
//     console.log(res)
//     getData('Kavan').then((res)=>{
//         console.log(res)
//     })
// })


// getData('Ishmeet').
// then((res)=>{
   
//     return getData('Kavan')
// }).then((res)=>{
//     return getData(3)
// }).then((res)=>{
//     console.log(res)
// })

function api(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(data)
            rej(`${data} fetched successfully`)
        },2000)
        
    })
}

(async function (){
    try {
    await api('Ishmeet')
    await api('Kavan')
    await api('Kalu')
    } 
    catch (error) {
       console.log(error) 
    }
    
})()

