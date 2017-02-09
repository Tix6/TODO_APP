import mongoose, { Schema } from 'mongoose';
import R from 'ramda';
import Task from './task';

const todoSchema = new Schema({
  label: { type: String, required: true },
});

todoSchema.set('toJSON', {
  virtuals: true,
});

const Todo = mongoose.model('Todo', todoSchema);

const filter = (words) => {
  const pattern = R.compose(R.join(''), R.map(word => `(?=.*${word})`))(words);
  const regex = new RegExp(`${pattern}.*`, 'i');

  const todosFilteredFromTodos = Todo.find({ label: regex }).exec();
  const todosFilteredFromTasks = Task.populateTodos({ description: regex })
    .then(R.pluck('listId'));

  return Promise.all([todosFilteredFromTodos, todosFilteredFromTasks])
    .then(([fromTodos, fromTasks]) => R.union(fromTodos, fromTasks));
};

const find = (queryString) => {
  if (queryString) {
    const words = R.compose(R.reject(R.isEmpty), R.split(' '))(queryString);
    return filter(words);
  }
  return Todo.find().exec();
};

const findOne = id =>
  Todo.findById(id).exec().then((todo) => {
    if (R.isEmpty(todo) || !todo) return Promise.reject(new Error('Unknown todo id.'));
    return todo;
  });

const add = ({ label }) => {
  const newTodo = new Todo({ label });
  return newTodo.save();
};

const del = (id) => {
  const todoPromise = Todo.findByIdAndRemove(id).exec();
  const tasksPromise = Task.delByTodoId(id);

  return Promise.all([todoPromise, tasksPromise])
    .then(([todoDeleted, tasksDeleted]) => {
      console.log(`${tasksDeleted} tasks deleted.`);
      return { id: todoDeleted._id };
    });
};

export default { find, findOne, add, del };
