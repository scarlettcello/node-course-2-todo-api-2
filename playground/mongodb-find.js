//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').find({
    //     _id: new ObjectID("5b97530a8d001e86cd4a7e42")
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name:'Carol'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    })
    db.collection('Users').find({
        name: 'Carol'
    }).count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    //db.close();
});
