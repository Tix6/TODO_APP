import React from 'react';
import chai from 'chai';
import { Card, Button } from 'antd';
import { shallow } from 'enzyme';
import { createStore } from '../../../../store';
import initialState from '../../../../mockup';
import actions from '../../../../actions';
import Todo, { Header, TodoHeader } from '..';
import AddTask from '../add_task';
import Task from '../task';

const { describe, it } = global;
const { expect } = chai;
const store = createStore(initialState);
const { dispatch } = store;
const todo = { id: 1 };
const tasks = [{ id: 1, todoId: 1 }, { id: 2, todoId: 1 }, { id: 3, todoId: 1 }];

describe('[UT] <Todo />', () => {
  it('should render a <Card />', () => {
    expect(shallow(<Todo
      todo={todo}
      tasks={tasks}
      dispatch={dispatch}
      actions={actions}
    />).find(Card)).to.have.length(1);
  });

  it('should render a <AddTask />', () => {
    expect(shallow(<Todo
      todo={todo}
      tasks={tasks}
      dispatch={dispatch}
      actions={actions}
    />).find(AddTask)).to.have.length(1);
  });

  it('should render a <ul> tag', () => {
    expect(shallow(<Todo
      todo={todo}
      tasks={tasks}
      dispatch={dispatch}
      actions={actions}
    />).find('ul')).to.have.length(1);
  });

  it(`should render ${tasks.length} <li> tags`, () => {
    expect(shallow(<Todo
      todo={todo}
      tasks={tasks}
      dispatch={dispatch}
      actions={actions}
    />).find('li')).to.have.length(tasks.length);
  });

  it(`should render ${tasks.length} <Task />`, () => {
    expect(shallow(<Todo
      todo={todo}
      tasks={tasks}
      dispatch={dispatch}
      actions={actions}
    />).find(Task)).to.have.length(tasks.length);
  });
});

describe('[UT] <TodoHeader />', () => {
  it('should render a <Header />', () => {
    expect(shallow(<TodoHeader
      todo={todo}
      dispatch={dispatch}
      actions={actions}
    />).find(Header)).to.have.length(1);
  });

  it('should render a <h3> tag', () => {
    expect(shallow(<TodoHeader
      todo={todo}
      dispatch={dispatch}
      actions={actions}
    />).find('h3')).to.have.length(1);
  });

  it('should render a <Button />', () => {
    expect(shallow(<TodoHeader
      todo={todo}
      dispatch={dispatch}
      actions={actions}
    />).find(Button)).to.have.length(1);
  });
});
