Directory Structure
todo-api/
  |- controllers/
  |  |- todoController.js
  |- models/
  |  |- todo.js
  |- routes/
  |  |- todoRoutes.js
  |- services/
  |  |- todoService.js
  |- middlewares/
  |  |- auth.js
  |- utils/
  |  |- helper.js
  |- .env
  |- .env.sample
  |- app.js
  |- package.json


server.js: This file sets up the express server for our API. It imports the express library and our todoRoutes module. It creates an express app and configures it to use JSON parsing for incoming requests. It mounts our todoRoutes on the /todos endpoint, so that all requests to /todos will be handled by our todo API. Finally, it starts the server by listening on port 3000, and logs a message to the console to indicate that the server has started.

routes/todoRoutes.js: This file sets up the routes for our todo API. It creates an express router and uses it to define the endpoints for our API. Each endpoint corresponds to a specific HTTP method (e.g. GET, POST, PUT, DELETE) and a path (e.g. /, /:id). It then specifies the corresponding controller function that should handle requests to that endpoint. Finally, it exports the router so that it can be used in our main application file.

controllers/todoController.js: This file contains the functions that handle the requests to our todo API. These functions perform the logic for each endpoint of our API, such as creating a new todo, retrieving a list of todos, updating an existing todo, and deleting a todo. They communicate with our database (or in-memory data store) to retrieve and persist the todo data.

models/todoModel.js (if using an ORM like Sequelize): This file defines the todo model for our database. It specifies the structure of our todo data, including the fields and data types. It also defines any relationships between todos and other entities in our database. When using an ORM like Sequelize, this model is used to perform database operations such as creating tables, inserting data, and querying data.