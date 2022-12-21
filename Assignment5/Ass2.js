//five example of hasOwnProperty()

const student1={
       name:'Rambo',
       age:22,
       rollNo:104,
       section:'A'
}
console.log(student1.hasOwnProperty('name'));

const employee1={
    name:'Rambo',
    eId:101,
    sal:40000
}
console.log(employee1.hasOwnProperty('eId'));

const car1={
    brand:'Audi',
    price:4000000,
    color:'Red'
}

console.log(car1.hasOwnProperty('color'));

const phone1={
    brand:'Nokia',
    price:30000,
    color:'black'
}
console.log(phone1.hasOwnProperty('brand'));

const fruit1={
    name:'Mango',
    size:'big',
    price:'40/kg'
}
console.log(fruit1.hasOwnProperty('size'));