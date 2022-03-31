const express = require('express');
const router = express.Router();

const Todo = require('../models/todo-model.js');

router.get('/', (req, res) => {
    Todo.find({})
        .then(todos => res.render('todos/index', {
            todos
        }))
        .catch(console.error);
});

router.get('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then((todo) => {
            res.render('todos/show', todo)
        })
        .catch(console.error);
});


module.exports = router;