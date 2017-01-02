import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Todos, { Section } from '..';
import Todo from '../todo';

const { describe, it } = global;
const { expect } = chai;

const todos = [
  {
    id: 1,
    label: 'todo 1',
  },
  {
    id: 2,
    label: 'todo 2',
  },
  {
    id: 3,
    label: 'todo 3',
  },
];

describe('[UT] <Todos />', () => {
  it('should render a <Section />', () => {
    expect(shallow(<Todos
      options={{}}
      todos={todos}
      tasks={{}}
      actions={{}}
    />).find(Section)).to.have.length(1);
  });

  it(`should render as many <Todo /> as Todo into state ( -> ${todos.length})`, () => {
    expect(shallow(<Todos
      options={{}}
      todos={todos}
      tasks={{}}
      actions={{}}
    />).find(Todo)).to.have.length(todos.length);
  });
});
