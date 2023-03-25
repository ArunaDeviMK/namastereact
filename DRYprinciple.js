const arr=[1,2,3,4]
const PI=22/7;
const area=(r)=>{
    return 2*PI*r*r
}

const circumference=(r)=>{
    return 2*PI*r
}

const calculate=(logic)=>{
 
   return  arr.map(n=>logic(n))
 
}

console.log(calculate(area))