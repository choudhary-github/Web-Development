console.log('type of String:', typeof String)
console.log('type of Object:', typeof Object)
console.log('type of Boolean:', typeof Boolean)
console.log('type of Object:', typeof Object)

let obj = {
    a : 50,
    b : 'adad'
}

str = '12345'
console.log(str.charAt(4))

String.prototype.charAt = function() { return 'x' } // We can change the defination of String.prototype.CharAt

console.log(str.charAt(2))  // everytime we pass any arg in str.charAt() , it will give x

console.log(String.prototype)           
//  String.prototype conatains all function related string.
//  Like CharAt, slice, split etc.


Array.prototype.joinOriginal = Array.prototype.join

Array.prototype.join = function() {
    console.log('join called on', this)  //this prefer to 
    return this.joinOriginal(...arguments)
}

let l = [123,234,345,456,567]
// console.log(l.join(','))