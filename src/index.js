'use strict'

// let a = 0363 //error
// let a = 0o363; //fine
//

// Duplicate properties

//
// , not in ES6 see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Duplicate_property_names
//
// // Assignment to a non-writable property
// let obj1 = {}
// Object.defineProperty(obj1, 'x', { value: 42, writable: false })
// obj1.x = 9 // throws a TypeError
//
// // Assignment to a getter-only property
// let obj2 = {
//     get x() {
//         return 17
//     }
// }
// obj2.x = 5 // throws a TypeError
//
// // Assignment to a new property on a non-extensible object
// let fixed = {}
// Object.preventExtensions(fixed)
// fixed.newProp = 'ohai' // throws a TypeError

// Throws an error if you try delete undeletable properties. previously no effect.
//delete Object.prototype // throws a TypeError

// Throws an error when trying to set a property on a primitive
//(1).hiThere = "heya!"

and more https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
