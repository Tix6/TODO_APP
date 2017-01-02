import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { createStore } from '../../../store';
import initialState from '../../../mockup';
import actions from '../../../actions';
import Menu, { Section, Filters } from '..';
import AddTodo from '../add_todo';
import FilterTodos from '../filter_todos';
import SortTodos from '../sort_todos';

const { describe, it } = global;
const { expect } = chai;
const store = createStore(initialState);
const { dispatch, state: { mode } } = store;

describe('[UT] <Menu />', () => {
  it('should render a <Section />', () => {
    expect(shallow(<Menu dispatch={dispatch} actions={actions} mode={mode} />).find(
      Section)).to.have.length(1);
  });

  it('should render a <Filters />', () => {
    expect(shallow(<Menu dispatch={dispatch} actions={actions} mode={mode} />).find(
      Filters)).to.have.length(1);
  });

  it('should render a <AddTodo />', () => {
    expect(shallow(<Menu dispatch={dispatch} actions={actions} mode={mode} />).find(
      AddTodo)).to.have.length(1);
  });

  it('should render a <SortTodos />', () => {
    expect(shallow(<Menu dispatch={dispatch} actions={actions} mode={mode} />).find(
      SortTodos)).to.have.length(1);
  });

  it('should render a <FilterTodos />', () => {
    expect(shallow(<Menu dispatch={dispatch} actions={actions} mode={mode} />).find(
      FilterTodos)).to.have.length(1);
  });
});
