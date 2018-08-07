const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

// prepare 2 todo test collection
const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
}, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333
}];

// prepare 2 user test collection
const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const secretSalt = 'abc131'
const users = [{
    _id: userOneId,
    email: 'test1@test.com',
    password: 'test1pwd',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, secretSalt).toString()
        }],
    }, {
    _id: userTwoId,
    email: 'test2@test.com',
    password: 'test2pwd'
}];

const populateTodos = (done)=>{
    Todo.remove({}).then(()=>{
        return Todo.insertMany(todos);
    }).then(()=>done());
};

const populateUsers = (done)=>{
    User.remove({}).then(()=>{
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(()=>done());
};

module.exports = {
    todos,
    populateTodos,
    users,
    populateUsers
};