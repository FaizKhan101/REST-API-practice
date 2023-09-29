const express = require("express");

const db = require("./data/database");
const todoRoutes = require("./routes/todo.routes");

const app = express();

app.use(express.json());

app.use("/todos", todoRoutes);

db.initDb()
  .then(() => {
    app.listen(3000, () => console.log("Server start at port 3000!"));
  })
  .catch((error) => {
    console.log("Database connection failed!");
  });
