import chai from 'chai';
import tasksReducer from '../tasks';
import { taskAdded, taskDeleted, taskUpdated } from '../../actions/tasks';

const { describe, it } = global;
const { expect } = chai;

const addAction = taskAdded({ id: 4, description: 'task test 4', listId: 2, isCompleted: false });
const delAction = taskDeleted({ id: 1 });
const updateAction = taskUpdated({ id: 1, description: 'updated', isCompleted: true, listId: 1 });

const initialState = [
  { id: 1, listId: 1, description: 'task test 1', isCompleted: false },
  { id: 2, listId: 1, description: 'task test 2', isCompleted: false },
  { id: 3, listId: 2, description: 'task test 3', isCompleted: true },
];

const stateAfterAdd = [
  ...initialState,
  { id: 4, listId: 2, description: 'task test 4', isCompleted: false },
];

const stateAfterDel = initialState.filter(task => task.id !== 1);

const stateAfterUpdate = [
  { id: 1, listId: 1, description: 'updated', isCompleted: true },
  { id: 2, listId: 1, description: 'task test 2', isCompleted: false },
  { id: 3, listId: 2, description: 'task test 3', isCompleted: true },
];

describe('[UT] [Reducer] tasks', () => {
  it('should return the initial state when action is undefined', () => {
    expect(tasksReducer(initialState, undefined)).to.deep.equal(initialState);
  });

  it('should return an empty state when state is undefined', () => {
    expect(tasksReducer(undefined, undefined)).to.deep.equal([]);
  });

  it('should add a task', () => {
    expect(tasksReducer(initialState, addAction)).to.deep.equal(stateAfterAdd);
  });

  it('should delete a task', () => {
    expect(tasksReducer(initialState, delAction)).to.deep.equal(stateAfterDel);
  });

  it('should update a task', () => {
    expect(tasksReducer(initialState, updateAction)).to.deep.equal(stateAfterUpdate);
  });
});
