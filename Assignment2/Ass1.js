let person={
    height:'5ft 8inc',
    weight:'75kg',
    color:'black',
    name:'Rambo',

    personDetails:function(){
        return `height =${this.height}, weight ${this.weight}, color=${this.color}, name=${this.name}`
    }

}
console.log(person);
console.log(person.personDetails());

let employee={
    name:'Rambo',
    idNo:101,
    salary:40000,
    joinDate:'02/Dec/2020',
    employeeDetails:function()
    {
        return `name=${this.name}, idno=${this.idNo},salary=${this.salary}, joinDate=${this.joinDate}`
    }
}

console.log(employee.employeeDetails());

let book={
    name:'Rangabati',
    writer:'Rambo',
    publisher:'RKD',
    price:1000,
    bookDetails:function()
    {
        return `name=${this.name}, writer=${this.writer}, publisher=${this.publisher}, price=${this.price}`
    }

}
console.log(book.bookDetails());

let cricketPlayer={
    name:'Rohit',
    isCaptain:true,
    hundreds:45,
    fifty:100,
    cricketPlayerDetails:function(){
        
    }
}
console.log(cricketPlayer.cricketPlayerDetails());
let student={
    name:'Rambo',
    id:5689,
    class:'9th',
    studentDetails:function()
    {
        return `name=${this.name}, id=${this.id}, class=${this.class}`
    }
}
console.log(student.studentDetails());