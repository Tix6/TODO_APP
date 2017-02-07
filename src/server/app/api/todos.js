import express from 'express';

const loadTodos = model => (req, res) => {
  res.json(model.load());
};

const addTodo = model => (req, res, next) => {
  try {
    const { todo } = req.body;
    res.json(model.add(todo));
  } catch (e) {
    next(e);
  }
};

const deleteTodo = (model, tasksModel) => (req, res, next) => {
  try {
    const id = Number(req.params.id);
    tasksModel.delByTodoId(id);
    res.json(model.del(id));
  } catch (e) {
    next(e);
  }
};

const initTodos = (model) => {
  const router = express.Router();
  router.get('/', loadTodos(model.todos));
  router.post('/', addTodo(model.todos));
  router.delete('/:id', deleteTodo(model.todos, model.tasks));
  return router;
};

export default initTodos;
