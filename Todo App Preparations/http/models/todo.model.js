const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./index');

const Todo = sequelize.define('Todos', {
  
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  done: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: false
});


module.exports = Todo;
