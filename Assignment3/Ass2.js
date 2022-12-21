

//Anonymous function
let isPrimeNoOrNot = function (n) {
    if (n <= 1) {
        return console.log('not a prime number');
    }
    else {
        let flag = false;
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) 
            {
                let flag = true;
                break;
            }
        }
        if (flag) {
            console.log('It is not a prime number');
        }
        else {
            console.log('It is a prime number');
        }
    }
}

isPrimeNoOrNot(5);


//Arrow functtion
const isPrimeNoOrNotWithArrow = (n) => {
    if (n <= 1) {
        return console.log('not a prime number');
    }
    else {
        let flag = false;
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) 
            {
                let flag = true;
            }
        }
        if (flag) {
            console.log('It is not a prime number');
        }
        else {
            console.log('It is a prime number');
        }
    }
}

isPrimeNoOrNotWithArrow(6);

//named function

function isPrimeNoOrNotWithNamed(n)
{
    if (n <= 1) {
        return console.log('not a prime number');
    }
    else {
        let flag = false;
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) 
            {
                let flag = true;
            }
        }
        if (flag) {
            console.log('It is not a prime number');
        }
        else {
            console.log('It is a prime number');
        }
    }
}
isPrimeNoOrNotWithNamed(6);


//self Invoked function

(function(n)
{
    if (n <= 1) {
        return console.log('not a prime number');
    }
    else {
        let flag = false;
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) 
            {
                let flag = true;
            }
        }
        if (flag) {
            console.log('It is not a prime number');
        }
        else {
            console.log('It is a prime number');
        }
    }
})(10)



/*
syntax
let func=()=>{

}

1.let func1=n=>{

}
2.let func2=n=>console.log(n)

3.let func3=(a,b)=>a+b
console.log(func3(4,5))
*/

console.log(func4(5,5));
function func4(a,b){
 return a+b
}
let func3=(a,b)=>a+b
console.log(func3(4,5))