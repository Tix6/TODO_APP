import express from 'express';
import Todo from '../../db/models/todo';

const loadTodos = (req, res, next) => {
  const { filter } = req.query;
  Todo.find(filter)
    .then(todos => res.json(todos))
    .catch(next);
};

const loadTodo = (req, res, next) => {
  const { id } = req.params;
  Todo.findOne(id)
    .then(resp => res.json(resp))
    .catch(next);
};

const addTodo = (req, res, next) => {
  const { todo } = req.body;
  Todo.add(todo)
    .then(added => res.json(added))
    .catch(next);
};

const deleteTodo = (req, res, next) => {
  const { id } = req.params;
  Todo.del(id)
    .then(deletedId => res.json(deletedId))
    .catch(next);
};

const initTodos = () => {
  const router = express.Router();
  router.get('/', loadTodos);
  router.get('/:id', loadTodo);
  router.post('/', addTodo);
  router.delete('/:id', deleteTodo);
  return router;
};

export default initTodos;
