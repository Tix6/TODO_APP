import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Form, Input, Button } from 'antd';
import AddTodo from '../add_todo';

const FormItem = Form.Item;
const { describe, it } = global;
const { expect } = chai;

describe('[UT] <AddTodo />', () => {
  it('should render a <Form />', () => {
    expect(shallow(<AddTodo onAdd={() => {}} />).find(
      Form)).to.have.length(1);
  });

  it('should render two <FormItem />', () => {
    expect(shallow(<AddTodo onAdd={() => {}} />).find(
      FormItem)).to.have.length(2);
  });

  it('should render a <Input />', () => {
    expect(shallow(<AddTodo onAdd={() => {}} />).find(
      Input)).to.have.length(1);
  });

  it('should render a <Button />', () => {
    expect(shallow(<AddTodo onAdd={() => {}} />).find(
      Button)).to.have.length(1);
  });
});
