import mongoose, { Schema } from 'mongoose';
import Todo from './todo';
import R from 'ramda';

const taskSchema = new Schema({
  description: { type: String, required: true },
  listId: { type: Schema.Types.ObjectId, ref: 'Todo', required: true },
  isCompleted: { type: Boolean, default: false },
});

taskSchema.set('toJSON', {
  virtuals: true,
});

const Task = mongoose.model('Task', taskSchema);

const find = (criteria = {}) => Task.find(criteria).exec();

const populateTodos = criteria => Task.find(criteria)
  .populate('listId').exec();

const add = ({ description = '', listId = 0, isCompleted = false }) => {
  const initAndSave = (todoId) => {
    const newTask = new Task({ description, listId: todoId, isCompleted });
    return newTask.save();
  };

  return Todo.findOne(listId)
    .then(todo => todo._id)
    .then(initAndSave);
};

const del = id =>
  Task.findByIdAndRemove(id).exec().then(task => ({ id: task._id }));

const delByTodoId = todoId =>
  Task.remove({ listId: todoId }).exec()
    .then(JSON.parse)
    .then(tasks => tasks.n);

const update = ({ _id, description = '', isCompleted = false }) =>
  Task.findByIdAndUpdate(_id, { description, isCompleted }).exec()
    .then(task => Task.findOne(task._id).exec());

export default { find, add, del, delByTodoId, update, populateTodos };
