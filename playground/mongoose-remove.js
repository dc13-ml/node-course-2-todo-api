const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5b65ee55123e7f91a4ab43f1'}).then((todo)=>{
//     console.log(todo);
// });

Todo.findByIdAndRemove('5b65ee55123e7f91a4ab43f1').then((todo)=>{
    console.log(todo);
});