import should from 'should';
import fetchMock from 'fetch-mock';
import { api } from '../../../../config/';
import {
  loadTasks,
  addTask,
  delTask,
  updateTask,
  TASKS_LOADED,
  TASK_ADDED,
  TASK_DELETED,
  TASK_UPDATED,
} from '../tasks';
import { configureStore } from './utils';
import rootReducer from '../../reducers/';

const { describe, it, afterEach } = global;

const url = api;

describe('[UT] tasks actions', () => {
  afterEach(() => fetchMock.restore());

  it('should load tasks', (done) => {
    const response = [{ id: 1, title: 'test1' }, { id: 2, title: 'test2' }];
    fetchMock.get(`${url}/api/todo/tasks`, response);
    const actions = {
      [TASKS_LOADED]: (getState, action) => {
        const { payload } = action;
        should(payload).deepEqual(response);
        const { tasks } = getState();
        should(tasks).deepEqual(payload);
        done();
      },
    };
    const store = configureStore(actions, { reducer: rootReducer });
    store.dispatch(loadTasks());
  });

  it('should add task', (done) => {
    const response = { listId: 1, id: 1, isCompleted: false, description: 'test' };
    fetchMock.post(`${url}/api/todo/tasks`, response);
    const actions = {
      [TASK_ADDED]: (getState, action) => {
        const { payload } = action;
        should(payload).deepEqual(response);
        const task = getState().tasks[0];
        should(task).deepEqual(payload);
        done();
      },
    };
    const store = configureStore(actions, { reducer: rootReducer });
    store.dispatch(addTask('test', 1));
  });

  it('should del task', (done) => {
    const response = { isDeleted: true, id: 1 };
    const state = { tasks: [{ listId: 1, id: 1, isCompleted: false, description: 'test' }] };
    fetchMock.delete(`${url}/api/todo/task/1`, response);
    const actions = {
      [TASK_DELETED]: (getState, action) => {
        const { payload } = action;
        should(payload).deepEqual(response);
        const task = getState().tasks.filter(t => t.id === 1);
        task.should.be.empty();
        done();
      },
    };
    const store = configureStore(actions, { reducer: rootReducer, state });
    store.dispatch(delTask(1));
  });

  it('should update task', (done) => {
    const response = { listId: 1, id: 1, isCompleted: true, description: 'updated' };
    const state = { tasks: [{ listId: 1, id: 1, isCompleted: false, description: 'test' }] };
    fetchMock.put(`${url}/api/todo/tasks`, response);
    const actions = {
      [TASK_UPDATED]: (getState, action) => {
        const { payload } = action;
        should(payload).deepEqual(response);
        const task = getState().tasks[0];
        should(task).deepEqual(payload);
        done();
      },
    };
    const store = configureStore(actions, { reducer: rootReducer, state });
    store.dispatch(updateTask(response));
  });
});
