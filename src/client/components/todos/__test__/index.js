import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { createStore } from '../../../store';
import initialState from '../../../mockup';
import actions from '../../../actions';
import Todos, { Section } from '..';
import Todo from '../todo';

const { describe, it } = global;
const { expect } = chai;
const store = createStore(initialState);
const { dispatch, state: { todos, tasks, mode } } = store;

describe('[UT] <Todos />', () => {
  it('should render a <Section />', () => {
    expect(shallow(<Todos
      mode={mode}
      todos={todos}
      tasks={tasks}
      dispatch={dispatch}
      actions={actions}
    />).find(Section)).to.have.length(1);
  });

  it(`should render as many <Todo /> as Todo into state ( -> ${todos.length})`, () => {
    expect(shallow(<Todos
      mode={mode}
      todos={todos}
      tasks={tasks}
      dispatch={dispatch}
      actions={actions}
    />).find(Todo)).to.have.length(todos.length);
  });
});
