var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todos');

var Todo = mongoose.model('Todo', {
    task: String,
    isCompleted: Boolean,
    isEditing: Boolean
});

module.exports.Todo = Todo;
