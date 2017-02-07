import mongoose, { Schema } from 'mongoose';

const todoSchema = new Schema({
  label: String,
});

todoSchema.set('toJSON', {
  virtuals: true,
});

const Todo = mongoose.model('Todo', todoSchema);

const load = () => Todo.find().exec();

const add = ({ label }) => {
  const newTodo = new Todo({ label });
  return newTodo.save();
};

const del = (id) =>
  Todo.findByIdAndRemove(id).exec().then(todo => ({ id: todo._id }));

// const isMatchingTodo = (id) => {
//   ...
// }

export default { load, add, del };
