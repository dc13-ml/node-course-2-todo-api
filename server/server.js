require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
var port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    }, (err)=>{
        res.status(400).send(err);
    });
});

app.get('/todos', (req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    }, (err)=>{
        res.status(400).send(err);
    });
});


app.get('/todos/:id', (req,res)=>{
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid object ID');
    };
    Todo.findById(id).then((todo)=>{
        if (!todo) {
            return res.status(404).send("Unable to find object");
        }
        res.send({todo});
    }, (err)=>{
        res.status(400).send(err);
    });
});

app.delete('/todos/:id', (req,res)=>{
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid object ID');
    };
    Todo.findByIdAndRemove(id).then((todo)=>{
        if (!todo) {
            return res.status(404).send(`Unable to find object with id: ${id}`);
        }
        res.send({todo});
    }, (err)=>{
        // catch all scenario
        res.status(400).send(err);
    });
});

app.patch('/todos/:id', (req,res)=>{
    var id = req.params.id;
    // pick out only the fields that users can update
    var body = _.pick(req.body, ['text', 'completed']);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid object ID');
    };
    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    };
    Todo.findByIdAndUpdate(id, {$set: body}, {new:true}).then((todo)=>{
        if (!todo) {
            return res.status(404).send(`Unable to find object with id: ${id}`);
        }
        res.send({todo});
    }).catch((err)=>{
        res.status(400).send(err);
    });
});

//
// Create a new user
//
app.post('/users', (req,res)=>{
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);
    
    user.save().then(()=>{
        return user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth', token).send(user);
    }).catch((err) => {
        res.status(400).send(err)
    });
});


app.listen(port, ()=>{
    console.log(`Started on port ${port}`);
});

module.exports = {
    app
};