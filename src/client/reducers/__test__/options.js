import chai from 'chai';
import optionsReducer from '../options';
import { showCompleted, sortByAsc } from '../../actions/options';

const { describe, it } = global;
const { expect } = chai;

const showCompletedAction = showCompleted();
const sortByAscAction = sortByAsc();

const initialState = {
  showCompleted: true,
  sortByAsc: true,
};

describe('[UT] [Reducer] options', () => {
  it('should return the initial state when action is undefined', () => {
    expect(optionsReducer(initialState, undefined)).to.deep.equal(initialState);
  });

  it('should return an empty state when state is undefined', () => {
    expect(optionsReducer(undefined, undefined)).to.deep.equal({});
  });

  it('should return the expected state when showCompleted action is sended', () => {
    expect(optionsReducer(initialState, showCompletedAction)).to.deep.equal(
      { showCompleted: false, sortByAsc: true });
  });

  it('should return the expected state when sortByAsc action is sended', () => {
    expect(optionsReducer(initialState, sortByAscAction)).to.deep.equal(
      { showCompleted: true, sortByAsc: false });
  });
});
