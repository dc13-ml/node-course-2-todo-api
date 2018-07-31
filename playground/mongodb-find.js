const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
        console.log('Unable to connect to MongoDB server');
        return;
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b60d7f4fe6c2d2570a36e12')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    var aPromise = db.collection('Users').find({name: 'Dennis Cheng'}).toArray();
    aPromise.then((docs)=>{
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch users', err);
    });

    // db.close();
});