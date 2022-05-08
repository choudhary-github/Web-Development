//  for importing
const lib1 = require('./lib1')

lib1.sayHello('Mark')


console.log(lib1.newtxt)

setTimeout(() => {
    console.log(lib1);
    const lib1_new = require('./lib1')
    console.log(lib1_new)
    
}, 2000);
console.log(lib1);