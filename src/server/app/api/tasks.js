import express from 'express';

const loadTasks = model => (req, res) => {
  res.json(model.load());
};

const addTask = (model, todosModel) => (req, res, next) => {
  try {
    const { task } = req.body;
    if (todosModel.isMatchingTodo(Number(task.listId))) {
      res.json(model.add(task));
    } else {
      throw new Error(`Unknown todo id ${task.listId}`);
    }
  } catch (e) {
    next(e);
  }
};

const updateTask = model => (req, res, next) => {
  try {
    const { task } = req.body;
    res.json(model.update(task));
  } catch (e) {
    next(e);
  }
};

const deleteTask = model => (req, res, next) => {
  try {
    const id = Number(req.params.id);
    res.json(model.del(id));
  } catch (e) {
    next(e);
  }
};

const initTasks = (model) => {
  const router = express.Router();
  router.get('/', loadTasks(model.tasks));
  router.post('/', addTask(model.tasks, model.todos));
  router.put('/', updateTask(model.tasks));
  router.delete('/:id', deleteTask(model.tasks));
  return router;
};

export default initTasks;
