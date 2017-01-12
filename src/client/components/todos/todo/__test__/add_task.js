import React from 'react';
import chai from 'chai';
import { Form, Input, Button } from 'antd';
import { shallow } from 'enzyme';
import AddTask, { Row } from '../add_task';

const FormItem = Form.Item;
const { describe, it } = global;
const { expect } = chai;

describe('[UT] <AddTask />', () => {
  it('should render a <Row />', () => {
    expect(shallow(<AddTask
      todoId={1}
      onAdd={() => {}}
    />).find(Row)).to.have.length(1);
  });

  it('should render a <Form />', () => {
    expect(shallow(<AddTask
      todoId={1}
      onAdd={() => {}}
    />).find(Form)).to.have.length(1);
  });

  it('should render two <FormIten />', () => {
    expect(shallow(<AddTask
      todoId={1}
      onAdd={() => {}}
    />).find(FormItem)).to.have.length(2);
  });

  it('should render a <Input />', () => {
    expect(shallow(<AddTask
      todoId={1}
      onAdd={() => {}}
    />).find(Input)).to.have.length(1);
  });

  it('should render a <Button />', () => {
    expect(shallow(<AddTask
      todoId={1}
      onAdd={() => {}}
    />).find(Button)).to.have.length(1);
  });
});
