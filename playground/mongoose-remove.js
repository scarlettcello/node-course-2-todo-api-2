const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5b9c860666329b6cb35d47e3'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5b9c860666329b6cb35d47e3').then((todo) => {
    console.log(todo);
});

//Todo.findByIdAndRemove()
