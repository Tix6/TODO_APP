import mongoose, { Schema } from 'mongoose';

const taskSchema = new Schema({
  description: String,
  listId: String,
  isCompleted: Boolean,
});

taskSchema.set('toJSON', {
  virtuals: true,
});

const Task = mongoose.model('Task', taskSchema);

const load = () => Task.find({}).exec();

const add = ({ description = '', listId = 0, isCompleted = false }) => {
  const newTask = new Task({ description, listId, isCompleted });
  return newTask.save();
};

const del = id =>
  Task.findByIdAndRemove(id).exec().then(task => ({ id: task._id }));

const delByTodoId = todoId => Task.find({ listId: todoId }).exec();

const update = ({ _id, description = '', isCompleted = false }) =>
  Task.findByIdAndUpdate(_id, { description, isCompleted }).exec();

export default { load, add, del, delByTodoId, update };
