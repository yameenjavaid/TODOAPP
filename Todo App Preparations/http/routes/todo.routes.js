const express = require('express');
const TodoController = require('../controllers/todo.controller');
const router = express.Router();







router.post('/', TodoController.createTodo);
router.get('/', TodoController.getTodos);

router.get('/:id/', TodoController.getTodoById);

router.put('/:id/edit', TodoController.updateTodo);
router.delete('/:id/delete', TodoController.deleteTodo);

module.exports = router;
