/* 
Truthy
True
any number without 
any string '0'
any string single white space
[]
{}
..................
Falsy
false
0
empty string
variable undefined
null
parseINT    parseFloat
*/
let x = {};
console.log('value of x', x)
if (x) {
    console.log('x is truthy')
}
else {
    console.log('x is falsy')
}