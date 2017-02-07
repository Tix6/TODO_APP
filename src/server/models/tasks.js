import R from 'ramda';
import eventEmitter from 'events';
import { taskAdded, taskDeleted, taskUpdated } from '../../client/actions/tasks';

class Tasks extends eventEmitter {
  constructor() {
    super();
    this.id = 0;
    this.tasks = [];
  }

  load() {
    return this.tasks;
  }

  errorHandler({ id = -1, description = '' }, toCheck) {
    if (toCheck.id) {
      const index = R.findIndex(R.propEq('id', id), this.tasks);
      if (index === -1) throw new Error(`Unknown task id ${id}`);
    }
    if (toCheck.description && !description.length) {
      throw new Error('Empty task description.');
    }
  }

  add(task) {
    this.errorHandler(task, { description: true });
    const { description, listId, isCompleted = false } = task;
    const newTask = { description, listId, isCompleted, id: (this.id += 1) };
    this.tasks.push(newTask);
    this.emit('action', taskAdded(newTask));
    return newTask;
  }

  update(task) {
    this.errorHandler(task, { id: true, description: true });
    const index = R.findIndex(R.propEq('id', task.id), this.tasks);
    this.tasks[index] = task;
    this.emit('action', taskUpdated(task));
    return task;
  }

  delByTodoId(todoId) {
    this.tasks = R.filter(task => task.listId !== todoId)(this.tasks);
  }

  del(id) {
    this.errorHandler({ id }, { id: true });
    this.tasks = R.filter(task => task.id !== id)(this.tasks);
    this.emit('action', taskDeleted({ id }));
    return { id };
  }

}

export default Tasks;
