import React from 'react';
import chai from 'chai';
import { Card, Button } from 'antd';
import { shallow } from 'enzyme';
import Todo, { Header, TodoHeader } from '..';
import AddTask from '../add_task';
import Task from '../task';

const { describe, it } = global;
const { expect } = chai;

const props = {
  todo: { id: 1 },
  tasks: [{ id: 1, todoId: 1 }, { id: 2, todoId: 1 }, { id: 3, todoId: 1 }],
  actions: { delTodo: () => {} },
};

describe('[UT] <Todo />', () => {
  it('should render a <Card />', () => {
    expect(shallow(<Todo {...props} />).find(Card)).to.have.length(1);
  });

  it('should render a <AddTask />', () => {
    expect(shallow(<Todo {...props} />).find(AddTask)).to.have.length(1);
  });

  it('should render a <ul> tag', () => {
    expect(shallow(<Todo {...props} />).find('ul')).to.have.length(1);
  });

  it(`should render ${props.tasks.length} <li> tags`, () => {
    expect(shallow(<Todo {...props} />).find('li')).to.have.length(props.tasks.length);
  });

  it(`should render ${props.tasks.length} <Task />`, () => {
    expect(shallow(<Todo {...props} />).find(Task)).to.have.length(props.tasks.length);
  });
});

describe('[UT] <TodoHeader />', () => {
  it('should render a <Header />', () => {
    expect(shallow(<TodoHeader {...props} />).find(Header)).to.have.length(1);
  });

  it('should render a <h3> tag', () => {
    expect(shallow(<TodoHeader {...props} />).find('h3')).to.have.length(1);
  });

  it('should render a <Button />', () => {
    expect(shallow(<TodoHeader {...props} />).find(Button)).to.have.length(1);
  });
});
