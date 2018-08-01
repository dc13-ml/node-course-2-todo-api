const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
        console.log('Unable to connect to MongoDB server');
        return;
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').deleteMany({text: 'Finish homework'}).then((result)=>{
    //     console.log(result);
    // })

    // db.collection('Todos').deleteOne({text: 'do homework'}).then((result)=>{
    //     console.log(result);
    // })

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Dennis Cheng'}).then((result)=>{
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b60db9f1b831c259bfaf777')}).then((result)=>{
        console.log(result);
    })
    // db.close();
});