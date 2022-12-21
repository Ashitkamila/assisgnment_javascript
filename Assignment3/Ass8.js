//named function
function fibonaciWithNamedFucntion(n)
{
    let a=0;
    let b=1;
    let c=0;
    while(c<=n)
    {
        console.log(c);
       a=b;
       b=c;
       c=a+b;
    }
}

fibonaciWithNamedFucntion(6);
//Arrow function
let fibonaciWithArrowFucntion=(n)=>
{
    let a=0;
    let b=1;
    let c=0;
    while(c<=n)
    {
        console.log(c);
       a=b;
       b=c;
       c=a+b;
    }
}
fibonaciWithArrowFucntion(8);


//SelfInvoked function
(function(n)
{
    let a=0;
    let b=1;
    let c=0;
    while(c<=n)
    {
        console.log(c);
       a=b;
       b=c;
       c=a+b;
    }
})(10)

//anonymous function

let fibonaciWithAnonymousFucntion=function(n)
{
    let a=0;
    let b=1;
    let c=0;
    while(c<=n)
    {
        console.log(c);
       a=b;
       b=c;
       c=a+b;
    }
}

fibonaciWithAnonymousFucntion(20);

