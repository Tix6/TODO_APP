import express from 'express';
import initTodos from './todos';
import initTasks from './tasks';

const initApi = (models) => {
  const api = express.Router();
  api.use('/todos', initTodos(models));
  api.use('/tasks', initTasks(models));
  return api;
};

export default initApi;
