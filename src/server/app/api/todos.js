import express from 'express';
import Todo from '../../db/models/todo';

const loadTodos = (req, res, next) => {
  Todo.load().then(t => res.json(t)).catch(next);
};

const addTodo = (req, res, next) => {
  const { todo } = req.body;
  Todo.add(todo).then(t => res.json(t)).catch(next);
};

/* TODO: deletes tasks too */
const deleteTodo = (req, res, next) => {
  const { id } = req.params;
  Todo.del(id).then(i => res.json(i)).catch(next);
};

const initTodos = () => {
  const router = express.Router();
  router.get('/', loadTodos);
  router.post('/', addTodo);
  router.delete('/:id', deleteTodo);
  return router;
};

export default initTodos;
