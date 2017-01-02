import React from 'react';
import chai from 'chai';
import { Checkbox, Input } from 'antd';
import { shallow } from 'enzyme';
import Task, { Row, Col } from '../task';

const { describe, it } = global;
const { expect } = chai;
const task = { id: 4, listId: 1, description: 'task 4', isCompleted: false };

describe('[UT] <Task />', () => {
  it('should render a <Row />', () => {
    expect(shallow(<Task
      task={task}
      actions={{}}
    />).find(Row)).to.have.length(1);
  });

  it('should render two <Col />', () => {
    expect(shallow(<Task
      task={task}
      actions={{}}
    />).find(Col)).to.have.length(2);
  });

  it('should render a <CheckBox />', () => {
    expect(shallow(<Task
      task={task}
      actions={{}}
    />).find(Checkbox)).to.have.length(1);
  });
});

describe('[UT] <Task /> (updateMode === TRUE)', () => {
  const updateMode = true;

  it('should render a <Input />', () => {
    expect(shallow(<Task
      task={task}
      actions={{}}
    />).setState({ updateMode }).find(Input)).to.have.length(1);
  });

  it('should NOT render a <p> tag', () => {
    expect(shallow(<Task
      task={task}
      actions={{}}
    />).setState({ updateMode }).find('p')).not.to.have.length(1);
  });

  it('should render a validation <Button />', () => {
    expect(shallow(<Task
      task={task}
      actions={{}}
    />).setState({ updateMode }).find({ icon: 'check' })).to.have.length(1);
  });

  it('should NOT render an edition <Button />', () => {
    expect(shallow(<Task
      task={task}
      actions={{}}
    />).setState({ updateMode }).find({ icon: 'edit' })).not.to.have.length(1);
  });

  it('should NOT render a close <Button />', () => {
    expect(shallow(<Task
      task={task}
      actions={{}}
    />).setState({ updateMode }).find({ icon: 'close' })).not.to.have.length(1);
  });
});

describe('[UT] <Task /> (updateMode === FALSE)', () => {
  const updateMode = false;

  it('should NOT render a <Input />', () => {
    expect(shallow(<Task
      task={task}
      actions={{}}
    />).setState({ updateMode }).find(Input)).not.to.have.length(1);
  });

  it('should render a <p> tag', () => {
    expect(shallow(<Task
      task={task}
      actions={{}}
    />).setState({ updateMode }).find('p')).to.have.length(1);
  });

  it('should NOT render a validation <Button />', () => {
    expect(shallow(<Task
      task={task}
      actions={{}}
    />).setState({ updateMode }).find({ icon: 'check' })).not.to.have.length(1);
  });

  it('should render an edition <Button />', () => {
    expect(shallow(<Task
      task={task}
      actions={{}}
    />).setState({ updateMode }).find({ icon: 'edit' })).to.have.length(1);
  });

  it('should render a close <Button />', () => {
    expect(shallow(<Task
      task={task}
      actions={{}}
    />).setState({ updateMode }).find({ icon: 'close' })).to.have.length(1);
  });
});
