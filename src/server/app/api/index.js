import express from 'express';
import initTodos from './todos';
import initTasks from './tasks';

const initApi = () => {
  const api = express.Router();
  api.use('/todos', initTodos());
  api.use('/tasks', initTasks());
  return api;
};

export default initApi;
