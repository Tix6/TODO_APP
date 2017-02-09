import express from 'express';
import Task from '../../db/models/task';

const loadTasks = (req, res, next) => {
  Task.findAll()
    .then(tasks => res.json(tasks))
    .catch(next);
};

const addTask = (req, res, next) => {
  const { task } = req.body;
  Task.add(task).then(t => res.json(t)).catch(next);
};

const deleteTask = (req, res, next) => {
  const { id } = req.params;
  Task.del(id).then(i => res.json(i)).catch(next);
};

const updateTask = (req, res, next) => {
  const { task } = req.body;
  Task.update(task).then(u => res.json(u)).catch(next);
};

const initTasks = () => {
  const router = express.Router();
  router.get('/', loadTasks);
  router.post('/', addTask);
  router.put('/', updateTask);
  router.delete('/:id', deleteTask);
  return router;
};

export default initTasks;
