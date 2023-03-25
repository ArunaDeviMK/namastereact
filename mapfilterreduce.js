const user=[
    {firstName:"Aruna",lastName:"Devi",age:39},
    {firstName:"Manga",lastName:"Devi",age:32},
    {firstName:"Lalitha",lastName:"Devi",age:39},
    {firstName:"Durga",lastName:"Devi",age:38} ,
    {firstName:"Kalika",lastName:"Devi",age:39},

]


const output=user.filter(n=>n.age<35).map(n=>n.firstName+" "+n.age).toString()
    

console.log(output)













//user1=user;

//user1.map((n,i)=>console.log(n,i))
/*user1.map((n,i)=>
{
   console.log(n,i)
    var count=0;
   for(let j=i;j<user1.length;j++)
    {
        if(n.age===user1[j].age)
        {
            count++;
            if(count===1)
            continue;
            user1.pop([j])
        }
    }
    console.log(`${n.age} have ${count} members`)
    
 })

*/

