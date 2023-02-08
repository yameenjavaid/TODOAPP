const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("tododb", "root", "4675", {
  host: "localhost",
  dialect: "mysql",
});

app.use(cors());
app.use(bodyParser.json());

const Todo = sequelize.define("todo", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  task: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

sequelize.sync().then(() => {
  console.log("Database created");
});

app.get("/", (req, res) => {
  Todo.findAll().then((todos) => {
    res.send(todos);
  });
});

app.post("/", (req, res) => {
  Todo.create({
    task: req.body.task,
    status: req.body.status,
  }).then((todo) => {
    res.send(todo);
  });
});

app.put("/:id", (req, res) => {
  Todo.update(
    {
      task: req.body.task,
      status: req.body.status,
    },
    { where: { id: req.params.id } }
  ).then((todo) => {
    res.send(todo);
  });
});

app.delete("/:id", (req, res) => {
  Todo.destroy({
    where: { id: req.params.id },
  }).then((todo) => {
    res.send(todo);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
