/* There are seven types of data type
Primitive
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
Non primitive
7. Object
*/
// Primitive
let a = 'hello';
let b = a;
// console.log(a, b);
a = 'gello';
// console.log(a, b);

// Non primitive
let c = { job: 'web developer' }
let d = c;
// console.log(c, d)
c.job = 'front end developer'
console.log(c, d);
