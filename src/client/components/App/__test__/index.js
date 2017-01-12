import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { AppComponent, Title } from '..';
import Menu from '../../menu/';
import Todos from '../../todos/';

const { describe, it } = global;
const { expect } = chai;
const props = { todos: [], tasks: {}, options: {}, actions: {} };

describe('[UT] <App />', () => {
  it('should render a <Title />', () => {
    expect(shallow(<AppComponent {...props} />).find(
      Title)).to.have.length(1);
  });

  it('should renders a <Menu />', () => {
    expect(shallow(<AppComponent {...props} />).find(
      Menu)).to.have.length(1);
  });

  it('should renders a <Todos />', () => {
    expect(shallow(<AppComponent {...props} />).find(
      Todos)).to.have.length(1);
  });
});
