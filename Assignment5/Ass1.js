//five example of find method 

const arr1=['Raka','Rambo','Ram','Saka']
const value1='Rambo'
const matchedNameForArray1=(n)=>{
   return n===value1
}
console.log(arr1.find(matchedNameForArray1));

const arr2=[2,5,7,5,7,2]
console.log(arr2.find(n=>n>5));

const arr3=[
    {name:'Rambo',age:23},
    {name:'Kambo',age:33},
    {name:'Sambo',age:30}
]
console.log(arr3.find(n=>n.age>30));

const arr4=[
    {eId:101,eName:'John',sal:50000},
    {eId:102,eName:'Son',sal:60000},
    {eId:103,eName:'Kon',sal:40000},
    {eId:104,eName:'Ton',sal:55000}
]
console.log(arr4.find(n=>n.eName==='Kon'));

const arr5=[444,84394,968495,986948,4783,9843943]
console.log(arr5.find(n=>{
    let flag =true;
    for(let i=2;i<n/2;i++)  {
  
        if(n%2===0){
            flag=false;
        }

    }
    if(flag){
        return true
    }
    else return false;
}));


//five example of findIndex()
const arr21=['Raka','Rambo','Ram','Saka']
console.log(arr21.findIndex(n=>n==='Saka'));

const arr22=[2,5,7,5,7,2]
console.log(arr22.findIndex(n=>n>5));

const arr23=[
    {name:'Rambo',age:23},
    {name:'Kambo',age:33},
    {name:'Sambo',age:30}
]
console.log(arr23.findIndex(n=>n.age>30));

const arr24=[
    {eId:101,eName:'John',sal:50000},
    {eId:102,eName:'Son',sal:60000},
    {eId:103,eName:'Kon',sal:40000},
    {eId:104,eName:'Ton',sal:55000}
]
console.log(arr24.findIndex(n=>n.eName==='Kon'));

const arr25=[444,84394,968495,986948,4783,9843943]
console.log(arr25.findIndex(n=>{
    let flag =true;
    for(let i=2;i<n/2;i++)  {
  
        if(n%2===0){
            flag=false;
        }

    }
    if(flag){
        return true
    }
    else return false;
}));

//five example of flat()
const arr31=['Raka','Rambo','Ram','Saka',['Lala','laka']]
const arr31Copy=arr31.flat()
console.log(arr31Copy);

const arr32=[2,5,7,5,7,2,[34,45,[32,54,]]]
const arr32Copy=arr32.flat()
const arr32Copy1=arr32.flat(2)
console.log(arr32Copy);
console.log(arr32Copy1);

const arr33=[
    {name:'Rambo',age:23},
    {name:'Kambo',age:33},
    {name:'Sambo',age:30},
    [
    {name:'Rambo',age:23},
    {name:'Kambo',age:33},
    {name:'Sambo',age:30},
    ]
]
const arr33Copy=arr33.flat()

console.log(arr33Copy);

const arr34=
[
    {eId:101,eName:'John',sal:50000},
    {eId:102,eName:'Son',sal:60000},
    {eId:103,eName:'Kon',sal:40000},
    {eId:104,eName:'Ton',sal:55000},
    [
        {name:'Rambo',age:23},
        {name:'Kambo',age:33},
        {name:'Sambo',age:30},
        [
        {name:'Rambo',age:23},
        {name:'Kambo',age:33},
        {name:'Sambo',age:30},
        ]
    ]
]

const arr34Copy=arr34.flat()
const arr34Copy1=arr34.flat(2)

console.log(arr34Copy);
console.log(arr34Copy1);

const arr35=[2,5,7,5,7,2,[34,45,[32,54,[487,454,[58495,49584]]]]]
const arr35Copy=arr35.flat()
const arr35Copy1=arr35.flat(2)
const arr35Copy2=arr35.flat(3)
const arr35Copy3=arr35.flat(4)
console.log(arr35Copy);
console.log(arr35Copy1);
console.log(arr35Copy2);
console.log(arr35Copy3);


//five example on sort()

const arr41=['Raka','Rambo','Ram','Saka']
console.log(arr41.sort());

const arr42=[2,5,7,5,7,2]
console.log(arr42.sort());

const arr43=[
    {name:'Rambo',age:23},
    {name:'Kambo',age:33},
    {name:'Sambo',age:30}
]
const sortedArr=arr43.sort((a,b)=>{
    return a.age-b.age
})
console.log(sortedArr);

const arr44=[
    {eId:101,eName:'John',sal:50000},
    {eId:102,eName:'Son',sal:60000},
    {eId:103,eName:'Kon',sal:40000},
    {eId:104,eName:'Ton',sal:55000}
]
console.log(arr44.sort((a,b)=>{
    return a.sal-b.sal
}));

const arr45=[
    {eId:101,eName:'Johnee',sal:50000},
    {eId:102,eName:'Sone',sal:60000},
    {eId:103,eName:'Koneeee',sal:40000},
    {eId:104,eName:'Toneeee',sal:55000}
]
console.log(arr45.sort((a,b)=>{
    return a.eName.length-b.eName.length
}));


//five example of reverse array
const arr51=['Raka','Rambo','Ram','Saka']
console.log(arr51.reverse());

const arr52=[2,5,7,5,7,2]
console.log(arr52.reverse());

const arr53=[
    {name:'Rambo',age:23},
    {name:'Kambo',age:33},
    {name:'Sambo',age:30}
]
console.log(arr53.reverse())

const arr54=[
    {eId:101,eName:'Johnee',sal:50000},
    {eId:102,eName:'Sone',sal:60000},
    {eId:103,eName:'Koneeee',sal:40000},
    {eId:104,eName:'Toneeee',sal:55000}
]
console.log(arr54.reverse());

const arr55=[444,84394,968495,986948,4783,9843943]
console.log(arr55.reverse());