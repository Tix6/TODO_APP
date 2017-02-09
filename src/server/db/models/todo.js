import mongoose, { Schema } from 'mongoose';
import R from 'ramda';
import Task from './task';

const todoSchema = new Schema({
  label: String,
});

todoSchema.set('toJSON', {
  virtuals: true,
});

const Todo = mongoose.model('Todo', todoSchema);

const findAll = () => Todo.find().exec();

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
      console.log(`${tasksDeleted.length} tasks deleted with todo ${todoDeleted._id}`);
      return { id: todoDeleted._id };
    });
};

export default { findAll, findOne, add, del };
