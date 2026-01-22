let score="33avb"
console.log(typeof(score))

let value=Number(score)
//  here no error is given but when we print value we see NaN
console.log(typeof(value)) 
console.log(value)

// => Number(33abc)=NaN
// => Number(true)=1 Number(false)=0
// Number(null)=0 Number(undefined)=NaN

// => Boolean("ishmeet")=true ,Boolean("")=false;
// => Boolean(any number except 0)=true ,Boolean(0)=false;
let x=null
console.log(Boolean(0))

let y=(String(x))
console.log(typeof(y))