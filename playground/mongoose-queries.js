const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b63ae8cd5b525113af6baa4';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
};

// Todo.findById(id);
Todo.find({
    _id: id
}).then((todos)=>{
    console.log('Todos ', todos);
});

Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log('Todo ', todo);
});

Todo.findById(id).then((todo)=>{
    if(!todo) {
        return console.log('id not found');
    }
    console.log('Todo by ID ', todo);
}).catch((err) => console.log(err));

var userId = '5b625367cb34213a302330da';

if (!ObjectID.isValid(userId)) {
    console.log('User ID not valid');
};

User.findById(userId).then((user)=>{
    if (!user) {
        return console.log('user id not found');
    }
    console.log('User by ID ', user);
});
