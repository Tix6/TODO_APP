import mongoose, { Schema } from 'mongoose';
import Todo from './todo';
import R from 'ramda';

const taskSchema = new Schema({
  description: String,
  listId: String,
  isCompleted: Boolean,
});

taskSchema.set('toJSON', {
  virtuals: true,
});

const Task = mongoose.model('Task', taskSchema);

const findAll = () => Task.find({}).exec();

const add = ({ description = '', listId = 0, isCompleted = false }) => {
  const newTask = new Task({ description, listId, isCompleted });
  return Todo.findOne(listId).then(() => newTask.save());
};

const del = id =>
  Task.findByIdAndRemove(id).exec().then(task => ({ id: task._id }));

const delByTodoId = todoId =>
  Task.find({ listId: todoId }).exec().then(tasks =>
    R.map(task => del(task._id))(tasks));

const update = ({ _id, description = '', isCompleted = false }) =>
  Task.findByIdAndUpdate(_id, { description, isCompleted }).exec();

export default { findAll, add, del, delByTodoId, update };
