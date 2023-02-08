const express = require('express');
const TodoController = require('../controllers/todo.controller');

const router = express.Router();

console.log("Came Here in Routes");

router.post('/', TodoController.createTodo);
router.get('/', TodoController.getTodos);
router.get('/:id', TodoController.getTodoById);
router.put('/:id', TodoController.updateTodo);
router.delete('/:id', TodoController.deleteTodo);

module.exports = router;
