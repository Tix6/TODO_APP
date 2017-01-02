import React from 'react';
import chai from 'chai';
import { Checkbox, Input } from 'antd';
import { shallow } from 'enzyme';
import { createStore } from '../../../../store';
import initialState from '../../../../mockup';
import actions from '../../../../actions';
import Task, { Row, Col } from '../task';

const { describe, it } = global;
const { expect } = chai;
const store = createStore(initialState);
const { dispatch } = store;
const task = { id: 4, todoId: 1, title: 'task 4', isChecked: false };

describe('[UT] <Task />', () => {
  it('should render a <Row />', () => {
    expect(shallow(<Task
      task={task}
      dispatch={dispatch}
      actions={actions}
    />).find(Row)).to.have.length(1);
  });

  it('should render two <Col />', () => {
    expect(shallow(<Task
      task={task}
      dispatch={dispatch}
      actions={actions}
    />).find(Col)).to.have.length(2);
  });

  it('should render a <CheckBox />', () => {
    expect(shallow(<Task
      task={task}
      dispatch={dispatch}
      actions={actions}
    />).find(Checkbox)).to.have.length(1);
  });
});


describe('[UT] <Task /> (updateMode === TRUE)', () => {
  const updateMode = true;

  it('should render a <Input />', () => {
    expect(shallow(<Task
      task={task}
      dispatch={dispatch}
      actions={actions}
    />).setState({ updateMode }).find(Input)).to.have.length(1);
  });

  it('should NOT render a <p> tag', () => {
    expect(shallow(<Task
      task={task}
      dispatch={dispatch}
      actions={actions}
    />).setState({ updateMode }).find('p')).not.to.have.length(1);
  });

  it('should render a validation <Button />', () => {
    expect(shallow(<Task
      task={task}
      dispatch={dispatch}
      actions={actions}
    />).setState({ updateMode }).find({ icon: 'check' })).to.have.length(1);
  });

  it('should NOT render an edition <Button />', () => {
    expect(shallow(<Task
      task={task}
      dispatch={dispatch}
      actions={actions}
    />).setState({ updateMode }).find({ icon: 'edit' })).not.to.have.length(1);
  });

  it('should NOT render a close <Button />', () => {
    expect(shallow(<Task
      task={task}
      dispatch={dispatch}
      actions={actions}
    />).setState({ updateMode }).find({ icon: 'close' })).not.to.have.length(1);
  });
});

describe('[UT] <Task /> (updateMode === FALSE)', () => {
  const updateMode = false;

  it('should NOT render a <Input />', () => {
    expect(shallow(<Task
      task={task}
      dispatch={dispatch}
      actions={actions}
    />).setState({ updateMode }).find(Input)).not.to.have.length(1);
  });

  it('should render a <p> tag', () => {
    expect(shallow(<Task
      task={task}
      dispatch={dispatch}
      actions={actions}
    />).setState({ updateMode }).find('p')).to.have.length(1);
  });

  it('should NOT render a validation <Button />', () => {
    expect(shallow(<Task
      task={task}
      dispatch={dispatch}
      actions={actions}
    />).setState({ updateMode }).find({ icon: 'check' })).not.to.have.length(1);
  });

  it('should render an edition <Button />', () => {
    expect(shallow(<Task
      task={task}
      dispatch={dispatch}
      actions={actions}
    />).setState({ updateMode }).find({ icon: 'edit' })).to.have.length(1);
  });

  it('should render a close <Button />', () => {
    expect(shallow(<Task
      task={task}
      dispatch={dispatch}
      actions={actions}
    />).setState({ updateMode }).find({ icon: 'close' })).to.have.length(1);
  });
});
