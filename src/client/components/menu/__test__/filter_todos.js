import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Switch } from 'antd';
import { createStore } from '../../../store';
import initialState from '../../../mockup';
import actions from '../../../actions';
import FilterTodos from '../filter_todos';

const { describe, it } = global;
const { expect } = chai;
const store = createStore(initialState);
const { dispatch, state: { mode } } = store;

describe('[UT] <FilterTodos />', () => {
  it('should render a <Switch />', () => {
    expect(shallow(
      <FilterTodos
        dispatch={dispatch}
        onSwitch={actions.showCompleted}
        sortByAsc={mode.showCompletedTodos}
      />).find(Switch)).to.have.length(1);
  });
});
