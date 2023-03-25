//SPREAD FUNCTION IS USED TO CONVERT INDIVIDUAL ELEMENTS INTO AN ARRAY
// TO ACCESS INDIVIDUAL ELEMENTS FROM SPREAD WE CAN USE ANY OF THE ITERATION METHODS (FIND||FINDiNDEX||FOREACH||FILTER)
function abc(...spread)
{
    sum=0;
    spread.filter(n=> sum+=n)
    console.log(sum);
}

abc(1,2,3,4);


/*var x=1;
a();
b();
console.log(x)

function a(){
    var x=10;
    console.log(x);
}

function b(){
   var x=100;
    console.log(x)
}
*/
