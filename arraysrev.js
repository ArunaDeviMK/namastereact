/*1.Reversing an array

console.log([1,2,3].reverse());*/


/*//2.converting String to Array

//console.log("asdf".split(''))

//converting Array to String

console.log(['a','b','c'].join(''))*/



/*//3.ForEach

let a=[1,2,3,4,5];
a.forEach((a,i,n)=>console.log(`${a} ${i} ${n}`))*/

//4.Finding an element

//1.find()

//console.log(['apple','orange','mosambi'].find(n=>n=='orange'))  // o/p:orange
//console.log(['apple','orange','mosambi'].find(n=>n=='orange1')) // o/p:undefined

//2.findIndex()
//console.log([1,2,3].findIndex(n=>n==20))

//includes()

//console.log([1,2,3].includes(30))



//5.Array.of and Array.from

//console.log(Array.of(1,2,3))

//Array.from is a callback fun on each and every element
//console.log(Array.from([1,2,3],n=>console.log(n)))

/*//6.Destructuring Elements
//Destructuring :Assigning different values to variables

[a,b,...c]=[10,20,30,40,50]
console.log(a+"\t"+b+"\t"+c);*/




/*//7.spread operator:it is used to convert individual elements into an array

function add(...spread)
{
    console.log(spread)
 spread.forEach(n=>console.log(n)) 
}

add([1,2,3,4])*/



/*//8.Remapping 

console.log([1,2,3,4].map(n=>console.log(sum)));*/

/*//9.slice and splice

//slice
//console.log([1,2,3,4,5].slice(1,3));


//splice
console.log([1,2,3,4,5].splice(0,2,10,20))*/


//10.Filter:iterates each and every element and checks with condition and returns every satisfied condition element


//console.log([2,3,4,6,7,8,10].filter(n=>n%2==0))

/*//11.flaterin

a=[
    [1,[2,3,[4,5,[6,7],[8,9]]]]

];

console.log(a.flat(30));*/


/*//12.Reducing:it is used to calc sum of given elements,intial val of a=0
sum=0;

console.log([1,2,3,4,5].reduce((a,b)=>a+b))*/



//13.comparing arrays


/*let a=[10,20,30];
let b=[10,20,30];
if(a===b)
console.log("equal");
else
console.log("notequal");*/





































 


