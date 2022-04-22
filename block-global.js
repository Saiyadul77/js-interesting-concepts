const favNum = 27;
// local scope

function add(first, second) {
    const result = first + second;
    // console.log(result)
    // console.log(favNum)
    return result;
}
const num = add(11, 35);
// console.log(num)

// block scope (if, switch, for, while loop area k block scope )
function sub(x, y) {
    const subs = x - y;
    // return subs;
    if (subs > -9) {
        const mood = 'happy';
        console.log(mood)

    }
}
const subNum = sub(5, 7)



