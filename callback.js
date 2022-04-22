function welcomeMessage(name, leader) {
    // console.log(name);
    leader(name);
}
// const names = ['rahim', 'karim', 'jobbar'];
// const myObj = { name: 'karim', age: 30, profession: 'teacher' };
function welcome(name) {
    console.log('good morning', name);
}
function bye(name) {
    console.log('good evening', name);
}
welcomeMessage('sayed', welcome);
welcomeMessage('ASADUL', welcome);