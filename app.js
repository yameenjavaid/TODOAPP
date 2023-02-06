const express = require('express');
const uuid = require('uuid/v4');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let todoItems = [];

const authMiddleware = async (req, res, next) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'pass') {
    next();
  } else {
    res.status(401).send({ error: 'Invalid username or password' });
  }
};

app.post('/todos', authMiddleware, async (req, res) => {
  try {
    const { description } = req.body;
    const id = uuid();
    const todo = { id, description };
    todoItems.push(todo);
    res.status(201).send({ id });
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.get('/todos', authMiddleware, async (req, res) => {
  try {
    res.status(200).send(todoItems);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.get('/todos/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const todo = todoItems.find(todo => todo.id === id);
    if (!todo) {
      res.status(404).send({ error: 'Todo not found' });
    } else {
      res.status(200).send(todo);
    }
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.put('/todos/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const todoIndex = todoItems.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
      res.status(404).send({ error: 'Todo not found' });
    } else {
      todoItems[todoIndex].description = description;
      res.status(200).send();
    }
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.delete('/todos/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const todoIndex = todoItems.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
      res.status(404).send({ error: 'Todo not found' });
    } else {
      todoItems.splice(todoIndex, 1);
      res.status(200).send();
    }
  } catch (error) {
    res.status(500).send({ error });
  }});git flow feature start feature_branch
