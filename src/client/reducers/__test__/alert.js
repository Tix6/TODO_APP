import chai from 'chai';
import alertReducer from '../alert';
import { addAlert } from '../../actions/alert';

const { describe, it } = global;
const { expect } = chai;

const addAction = addAlert('errorMsg', 'error');
const anotherAddAction = addAlert('successMsg', 'success');

const initialState = {};

const stateAfterAdd = { id: 1, type: 'error', message: 'errorMsg' };

const stateAfterAnotherAdd = { id: 2, type: 'success', message: 'successMsg' };

describe('[UT] [Reducer] alert', () => {
  it('should return the initial state when action is undefined', () => {
    expect(alertReducer(initialState, undefined)).to.deep.equal(initialState);
  });

  it('should return an empty state when state is undefined', () => {
    expect(alertReducer(undefined, undefined)).to.deep.equal({});
  });

  it('should return an alert', () => {
    expect(alertReducer(initialState, addAction)).to.deep.equal(
      stateAfterAdd);
  });

  it('should return another alert', () => {
    expect(alertReducer(initialState, anotherAddAction)).to.deep.equal(
      stateAfterAnotherAdd);
  });
});
