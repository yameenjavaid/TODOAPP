const express = require('express');
const session = require('express-session');
const TodoRoutes = require('./routes/todo.routes');
const AuthRoutes = require('./routes/auth.routes');

const authMiddleware = require("./middlewares/authMiddleware");

const app = express();
const PORT = 6000;

app.use(express.json());
app.use(
  session({
    secret: "QASWQASWQASWQASWQASWQASW",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 60 * 1000, // 30 minutes
    },
  }));

app.use('/', AuthRoutes);

app.use(authMiddleware);
app.use('/todo', TodoRoutes);



app.listen(PORT, () => {
  console.log(`Todo API running on http://localhost:${PORT}`);
});
