const Todo = require("../models/todo.model");

exports.getTodos = async (req, res, next) => {
  const todos = await Todo.getAllTodos();

  res.status(200).json({
    message: "Retrieving todos successfully",
    todos: todos,
  });
};

exports.addTodo = async (req, res, next) => {
  const text = req.body.text;

  const todo = new Todo(text);

  const result = await todo.save();
  let insertedId = result.insertedId;
  todo.id = insertedId;

  res.status(200).json({
    message: "Todo added succesfully!",
    createdTodo: todo,
  });
};

exports.updateTodo = async (req, res, next) => {
    const todoId = req.params.id
    const newText = req.body.newText

    const todo = new Todo(newText, todoId)

    await todo.save()

    res.status(200).json({
        message: "Todo updated successfully!"
    })
};

exports.deleteTodo = async (req, res, next) => {
    const todoId = req.params.id

    const todo = new Todo(null, todoId)
    await todo.delete()

    res.status(200).json({
        message: "Todo deleted successfully!"
    })
};
