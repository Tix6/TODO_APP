import should from 'should';
import fetchMock from 'fetch-mock';
import { api } from '../../../../config/';
import {
  loadTodos,
  addTodo,
  delTodo,
  TODOS_LOADED,
  TODO_ADDED,
  TODO_DELETED,
} from '../todos';
import { configureStore } from './utils';
import rootReducer from '../../reducers/';

const { describe, it, afterEach } = global;

const url = api;

describe('[UT] todos actions', () => {
  afterEach(() => fetchMock.restore());

  it('should load todos', (done) => {
    const response = [{ id: 1, title: 'test1' }, { id: 2, title: 'test2' }];
    fetchMock.get(`${url}/api/todo/lists`, response);
    const actions = {
      [TODOS_LOADED]: (getState, action) => {
        const { payload } = action;
        should(payload).deepEqual(response);
        const { todos } = getState();
        should(todos).deepEqual(payload);
        done();
      },
    };
    const store = configureStore(actions, { reducer: rootReducer });
    store.dispatch(loadTodos());
  });

  it('should add todo', (done) => {
    const response = { id: 1, title: 'test' };
    fetchMock.post(`${url}/api/todo/lists`, response);
    const actions = {
      [TODO_ADDED]: (getState, action) => {
        const { payload } = action;
        should(payload).deepEqual(response);
        const todo = getState().todos[0];
        should(todo).deepEqual(response);
        done();
      },
    };
    const store = configureStore(actions, { reducer: rootReducer });
    store.dispatch(addTodo('test'));
  });

  it('should del todo', (done) => {
    const response = { isDeleted: true, id: 1 };
    const state = { todos: [{ id: 1, title: 'test' }] };
    fetchMock.delete(`${url}/api/todo/list/1`, response);
    const actions = {
      [TODO_DELETED]: (getState, action) => {
        const { payload } = action;
        should(payload).deepEqual(response);
        const todo = getState().todos.filter(t => t.id === 1);
        todo.should.be.empty();
        done();
      },
    };
    const store = configureStore(actions, { reducer: rootReducer, state });
    store.dispatch(delTodo(1));
  });
});
