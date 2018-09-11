//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
        return console.log('Unable to connect MongoDB server');
    } else {

    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Carol',
        age: 35,
        location: 'Oakville, ON, Canada'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert a user');
        }
        console.log(result.ops[0]._id.getTimestamp());
    })
    db.close();
});
