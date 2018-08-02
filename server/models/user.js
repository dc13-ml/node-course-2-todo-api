const mongoose = require('mongoose');

// build a User model
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    age: {
        type: Number,
        required: false
    }
});

module.exports = {
    User
};