const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
        console.log('Unable to connect to MongoDB server');
        return;
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5b61922a02dd3466e75580ba')}, {
    //     $set: {completed: true}
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndUpdate({name: 'Foo Bar'}, {
    //     $set: {name: 'Dennis Cheng'}
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(JSON.stringify(result));
    // })

    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5b60e64f02dd3466e7557f11')}, {
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    // db.close();
});