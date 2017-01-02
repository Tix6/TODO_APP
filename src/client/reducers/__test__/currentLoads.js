import chai from 'chai';
import currentLoadsReducer from '../currentLoads';
import { addLoading, delLoading } from '../../actions/currentLoads';

const { describe, it } = global;
const { expect } = chai;

const addAction = addLoading();
const delAction = delLoading();

const initialState = 0;
const randomState = Math.floor(Math.random() * 10) + 1;

describe('[UT] [Reducer] currentLoads', () => {
  it('should return the initial state when action is undefined', () => {
    expect(currentLoadsReducer(initialState, undefined)).to.equal(initialState);
  });

  it('should return state when state is undefined', () => {
    expect(currentLoadsReducer(undefined, undefined)).to.equal(initialState);
  });

  it('should increment the state', () => {
    expect(currentLoadsReducer(randomState, addAction)).to.equal(randomState + 1);
  });

  it('should decrement the state', () => {
    expect(currentLoadsReducer(randomState, delAction)).to.equal(randomState - 1);
  });
});
