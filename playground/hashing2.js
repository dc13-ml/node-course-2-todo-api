const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc131';

// bcrypt.genSalt(10, (err,salt)=>{
//     bcrypt.hash(password, salt, (err, hash)=>{
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$/KFL2trsIGd89G2A0tmnsOdJWi.BdwHppoKOd70qq6yXSUU9eZc8W';

bcrypt.compare(password, hashedPassword, (err,result)=>{
    console.log(result);
});