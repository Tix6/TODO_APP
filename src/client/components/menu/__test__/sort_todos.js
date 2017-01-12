import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Switch } from 'antd';
import SortTodos from '../sort_todos';

const { describe, it } = global;
const { expect } = chai;
const sortByAsc = true;

describe('[UT] <SortTodos />', () => {
  it('should render a <Switch />', () => {
    expect(shallow(
      <SortTodos
        onSwitch={() => {}}
        sortByAsc={sortByAsc}
      />).find(Switch)).to.have.length(1);
  });
});
