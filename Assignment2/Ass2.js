let person= new Object;
person.height='5ft 8inc'
person.weight='75kg'
person.color='black'
person.name='Rambo'
person.age=26;
person.personDetails=function(){
    return `height =${this.height}, weight ${this.weight}, color=${this.color}, name=${this.name}`
}
console.log(person);
console.log(person.personDetails());

let employee=new Object;
employee.idNo=101;
employee.name='Rambo';
employee.joinDate='6 Dec 2021'
employee.salary=500000;
employee.employeeDetails=function()
{
    return `name=${this.name}, idno=${this.idNo},salary=${this.salary}, joinDate=${this.joinDate}`
}
console.log(employee);
console.log(employee.employeeDetails());


let book=new Object;
book.name='Rangabati';
book.price=1000;
book.publisher='RKD';
book.writer='Rambo';
book.bookDetails=function()
{
    return `name=${this.name}, writer=${this.writer}, publisher=${this.publisher}, price=${this.price}`
}
console.log(book);
console.log(book.bookDetails());


let cricketPlayer=new Object;
cricketPlayer.name='Rambo';
cricketPlayer.isCaptain=true;
cricketPlayer.fifty=120;
cricketPlayer.hundreds=45;
cricketPlayer.cricketPlayerDetails=function()
{
    return `name=${this.name}, isCaption=${this.isCaptain}, hundreds=${this.hundreds}, fifty=${this.fifty}`
}
console.log(cricketPlayer);
console.log(cricketPlayer.cricketPlayerDetails());


let student=new Object;
student.name='Rambo';
student.class='9th';
student.id=45;
student.studentDetails=function()
{
    return `name=${this.name}, id=${this.id}, class=${this.class}`
}

console.log(student);
console.log(student.studentDetails());