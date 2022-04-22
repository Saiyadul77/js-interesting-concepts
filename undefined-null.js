/* 
1. variable value not assigned
2. function but didn't return anything
3. wrote return but didn't return anything
4. parameters that isn't passed
5. property that isn't exists in an object
6. accessing array element out of an array
7. accessing delete of an array
// 8. explicit set value to undefined
9. null means nai and undefined means 

*/
let first;
// console.log(first);

function add(x, y) {
    const result = x + y;
    // return result;    // if naver return result
}
const sum = add(3, 5);
// console.log(sum)

function addition(x, y) {
    const result = x + y;
    if (x < 10) {
        return;
    }
    const minus = x - y;
    return minus;
}
const sums = addition(3, 10)
// console.log(sums)
function inputs(x, y) {
    const sum = x * 2
    // console.log(y);
    return sum;
}
const input = inputs(81);

const user = { name: 'sayed', age: 32, profession: 'teacher' };
// console.log(user.nam);

const num = [50, 56, 30, 21, 54, 80];
// console.log(num[9]);
delete num[2];
// console.log(num[2]);

const value = undefined;
// console.log(value)

const names = { name: 'sayed', profession: null };
console.log(names.profession);