// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const personData = require('./6-alternative-flavors')

console.log(names)
console.log(personData.items)
console.log(personData.People)
require('./7-mind-grenade')
// sayHi('Cookie')
// sayHi('Nguyen Thi')
// sayHi(names.john)
// sayHi(names.peter)


