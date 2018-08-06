const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 13
};
var token = jwt.sign(data, 'some secret');

// var message = 'I am user number 2';
// var hash = SHA256(message).toString();

console.log(`Message: ${data}`);
// console.log(`Hash: ${token}`);
console.log(token);

var decoded = jwt.verify(token, 'some secret');
// console.log(`Decoded ${decoded}`);
console.log(decoded);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// someone attempt to modify the data
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString()


// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust');
// }