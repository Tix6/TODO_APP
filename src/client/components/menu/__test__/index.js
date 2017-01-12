import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Menu, { Section, Filters } from '..';
import AddTodo from '../add_todo';
import FilterTodos from '../filter_todos';
import SortTodos from '../sort_todos';

const { describe, it } = global;
const { expect } = chai;

const props = {
  actions: {
    addTodo: () => {},
    showCompleted: () => {},
    sortByAsc: () => {},
  },
  options: {
    showCompleted: true,
    sortByAsc: true,
  },
};

describe('[UT] <Menu />', () => {
  it('should render a <Section />', () => {
    expect(shallow(<Menu {...props} />).find(
      Section)).to.have.length(1);
  });

  it('should render a <Filters />', () => {
    expect(shallow(<Menu {...props} />).find(
      Filters)).to.have.length(1);
  });

  it('should render a <AddTodo />', () => {
    expect(shallow(<Menu {...props} />).find(
      AddTodo)).to.have.length(1);
  });

  it('should render a <SortTodos />', () => {
    expect(shallow(<Menu {...props} />).find(
      SortTodos)).to.have.length(1);
  });

  it('should render a <FilterTodos />', () => {
    expect(shallow(<Menu {...props} />).find(
      FilterTodos)).to.have.length(1);
  });
});
