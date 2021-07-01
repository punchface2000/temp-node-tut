module.exports.items = ['item1','item2']
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
const peopleFirstName = ['Bob','Dave','Angel','Jaden','Joachim'];
const peopleLastName = ['Sancho', 'Smith','Kardashian','Timber','Panchetto'];
let people = [];
for (let i = 0;i < 10;i++)
{
    let randomFirstName = Math.floor(Math.random()*peopleFirstName.length);
    let randomLastName = Math.floor(Math.random()*peopleLastName.length);
    people[i] = new person(peopleFirstName[randomFirstName]+' '+peopleLastName[randomLastName],Math.floor(Math.random()*99+1));
}
module.exports.People = people;