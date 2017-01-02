import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Switch } from 'antd';
import { createStore } from '../../../store';
import initialState from '../../../mockup';
import actions from '../../../actions';
import SortTodos from '../sort_todos';

const { describe, it } = global;
const { expect } = chai;
const store = createStore(initialState);
const { dispatch, state: { mode } } = store;

describe('[UT] <SortTodos />', () => {
  it('should render a <Switch />', () => {
    expect(shallow(
      <SortTodos
        dispatch={dispatch}
        onSwitch={actions.sortByAsc}
        sortByAsc={mode.sortByAsc}
      />).find(Switch)).to.have.length(1);
  });
});
