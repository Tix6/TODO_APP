import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Switch } from 'antd';
import FilterTodos from '../filter_todos';

const { describe, it } = global;
const { expect } = chai;
const showCompleted = true;

describe('[UT] <FilterTodos />', () => {
  it('should render a <Switch />', () => {
    expect(shallow(
      <FilterTodos
        onSwitch={() => {}}
        showCompleted={showCompleted}
      />).find(Switch)).to.have.length(1);
  });
});
