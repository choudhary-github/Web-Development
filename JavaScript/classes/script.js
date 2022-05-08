class Person {
    constructor (name, age){
        this.name = name
        this.age = age
    }
    isAdult(){      // isAdult function is stored in Person.prototype   ( Object )
        if (this.age >= 18){
            return this.name + ' is adult'
        }
        else{
            return this.name + " is not adult"
        }
    }
}

let p1 = new Person('John Doe', 22)
let p2 = new Person('Tom', 17)

console.log(typeof Person)
console.log(p1.__proto__ == Person.prototype) // True  ,  Here Person is a special type of object
console.log(p1.__proto__.__proto__ == Object.prototype) // True

console.log('<======================>')

class Student extends Person {
    constructor(name,age,grade){
        super(name, age)
        this.grade = grade
    }
}

let s1 = new Student('Harry', 14, 'A')
let s2 = new Student('Sam', 19, 'B')

console.log(s1.__proto__ == Student.prototype)
console.log(s2.__proto__.__proto__ == Person.prototype)
console.log(s2.__proto__.__proto__.__proto__ == Object.prototype)

//    Inheritance Chain
//    Object.prototype -> person.prototype -> Student.prototype
//    Object !-> Person !-> Student      // these are function
