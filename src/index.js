'use strict'
let myObject = {}
myObject.newProp = {}
myObject.newProp.isAwesome = true
const propName = 'Awesome Property';
myObject[propName] = {
    a:1,
    b:2,
    c:3
}
console.log(myObject.newProp.isAwesome) // true
console.log(Object.keys(myObject[propName]).length) //3
