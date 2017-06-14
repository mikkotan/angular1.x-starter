var mongoose = require('mongoose');
var Todo = require('../db/db.js').Todo;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    console.error('GET from Mongo Node Server.');
    Todo.find(function(err, results) {
        if (err) { console.log('Error on GET: ' + err) }
        res.send({ todos: results });
    })
})

router.post('/', function(req, res) {
    console.error('POST from Mongo Node Server.');
    var todo = new Todo(req.body);
    todo.save(function(err) {
        if (err) { console.log('Error on POST: ' + err) }
        res.send('Task saved.');
    })
})

router.put('/:id', function(req, res) {
    console.error('PUT from Mongo Node Server.')
    console.log(JSON.stringify(req.body.task));
    var id = req.params.id;
    Todo.update({ _id: mongoose.Types.ObjectId(id) }, {
        $set: {
            task: req.body.task,
            isCompleted: req.body.isCompleted
        }
    }, function(err) {
        if (err) { console.log('Error on PUT:' + err) }
        res.send('Task updated.');
    })
})

router.delete('/:id', function(req, res) {
    console.log('DELETE from Mongo Node Server.')
    var id = req.params.id;
    Todo.remove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
        if (err) { console.log('Eror on DELETE: ' + err) }
        res.send('Task deleted.');
    })
})

module.exports = router;