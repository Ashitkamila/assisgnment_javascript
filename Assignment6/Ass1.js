//Example of map method


const movies11=['Spiderman','Batman','Antman','Iron man']
console.log(movies11.map(n=>`${n} is a good movie`));

const books12=[
    {
        title:'Harry Poter',
        price:90,
        author:'J K Rowling'
    },
    {
        title:'Indian Constitution',
        price:720,
        author:'Lakshmi Kanth'
    },
    {
        title:'Wings of fire',
        price:150,
        author:'A P J Abdul Kalam'
    }
]
const books12Copy=books12.map(n=>{
    n.price=n.price+50
    return n
})
console.log(books12Copy);
console.log(books12[0]===books12Copy[0]);// its here it doing shallow copy of only array not object inside

const books13=[
    {
        title:'Harry Poter',
        price:90,
        author:'J K Rowling'
    },
    {
        title:'Indian Constitution',
        price:720,
        author:'Lakshmi Kanth'
    },
    {
        title:'Wings of fire',
        price:150,
        author:'A P J Abdul Kalam'
    }
]

const books13Copy=books13.map(n=>{
    const books13ShallowCopy={...n};
    books13ShallowCopy.title=`${books13ShallowCopy.title} is a good book`
    return books13ShallowCopy;
})
console.log(books13Copy);
console.log(books13Copy[0]===books13[0]);


//example of filter copy

const movies21=['Spiderman','Batman','Antman','Iron man']
const movies21Copy=movies21.filter(n=>n.length>6)
console.log(movies21Copy);

const books22=[
    {
        title:'Harry Poter',
        price:90,
        author:'J K Rowling'
    },
    {
        title:'Indian Constitution',
        price:720,
        author:'Lakshmi Kanth'
    },
    {
        title:'Wings of fire',
        price:150,
        author:'A P J Abdul Kalam'
    }
]

const books22Copy=books22.filter(n=>n.price>100)
console.log(books22Copy);

let newvalue = [10, 20, 32, 60]
let filnew = newvalue.filter(dataone => {
    return dataone % 10 === 0
})
console.log(filnew);


// join
// 1-
let value20 = [1, 20, 30, 40, 50]
let newvalue1 = value20.join()
console.log(newvalue1);//same value

// 2-
let value29 = [12, 34, 45, 567]
let res = value29.join("")
console.log(res);// 123445567
3//
let str = ["sagar", "sipu", "dato", "don"]
let srt1 = str.join(":-")
console.log(srt1);

//Example on reduce method
//reduce method will take two parameter one is call back function another is seconde value
//it will add every element with previous sum of element
//a=previous value b=current value

const value1=[1,2,3,4,5,6,7]
const result1=value1.reduce((a,b)=>{
    return a+b;
})
console.log(result1)


let func= (a,b)=>{
    return a+b
}
const value2=[2,4,5,6,7]
const result2=value2.reduce((a,b)=>{
    return a*b;
},10)
console.log(result2);



// String
// toUpperCase.

let up = "hello"
let fin = up.toUpperCase()
console.log(fin);


let up1 = "sagar";
let fin2 = up1.toUpperCase()
console.log(fin2);

// toLowerCase


let downe = "Sagar Mohapatra"
let fin10 = downe.toLowerCase()
console.log(fin10);

let down = "SAGAR";
let fin234 = down.toLowerCase()
console.log(fin234);


// chartAt
let chart = "sagar kumar"
console.log(chart.charAt(7));

let charat = "kumar mohaptra"
console.log(charat.charAt(8));


// index of

let indexoff = "sagnnnmar mohapatra"
console.log(indexoff.indexOf("m", 4));

let indexoff900 = "sagarmohapatrha"
console.log(indexoff900.indexOf("h", 10));



// concat


let con = "sagar"
let confin = con.concat(",", "all")
console.log(confin);


let confine = "sipu"
let condata = confine.concat(",", con, ",", "all")

console.log(condata);


// includes

let inclu = "sagar all"
let innoon = inclu.includes("noon")
console.log(innoon);


let infine1 = "sipu done"
let infine23 = infine1.includes("done")
console.log(infine23);


// subtr
let dataone = "hello all , welcome to javascript session"
let dataview = dataone.substr(1, 7)
console.log(dataview);


let datatwo = dataone.substr(5, 10)
console.log(datatwo);

// substring

const substringval = dataone.substring(1,4)
console.log(substringval);


// trim

const email = "           sagarkuamrmohapatra6@gmail.com       "
const emailafter = email.trim()
console.log(emailafter);
const gmail = "           sagarkuamrmohapatra6@gmail.com       "

console.log(gmail.trimStart());