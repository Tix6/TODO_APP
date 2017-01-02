import React from 'react';
import chai from 'chai';
import { Form, Input, Button } from 'antd';
import { shallow } from 'enzyme';
import { createStore } from '../../../../store';
import initialState from '../../../../mockup';
import actions from '../../../../actions';
import AddTask, { Row } from '../add_task';

const FormItem = Form.Item;
const { describe, it } = global;
const { expect } = chai;
const store = createStore(initialState);
const { dispatch } = store;
const { addTask } = actions;
const todoId = 1;

describe('[UT] <AddTask />', () => {
  it('should render a <Row />', () => {
    expect(shallow(<AddTask
      todoId={todoId}
      dispatch={dispatch}
      onAdd={addTask}
    />).find(Row)).to.have.length(1);
  });

  it('should render a <Form />', () => {
    expect(shallow(<AddTask
      todoId={todoId}
      dispatch={dispatch}
      onAdd={addTask}
    />).find(Form)).to.have.length(1);
  });

  it('should render two <FormIten />', () => {
    expect(shallow(<AddTask
      todoId={todoId}
      dispatch={dispatch}
      onAdd={addTask}
    />).find(FormItem)).to.have.length(2);
  });

  it('should render a <Input />', () => {
    expect(shallow(<AddTask
      todoId={todoId}
      dispatch={dispatch}
      onAdd={addTask}
    />).find(Input)).to.have.length(1);
  });

  it('should render a <Button />', () => {
    expect(shallow(<AddTask
      todoId={todoId}
      dispatch={dispatch}
      onAdd={addTask}
    />).find(Button)).to.have.length(1);
  });
});
