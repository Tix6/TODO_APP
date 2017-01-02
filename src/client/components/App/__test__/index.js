import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { AppComponent, Wrapper } from '..';
import Header from '../../header/';
import Menu from '../../menu/';
import Todos from '../../todos/';

const { describe, it } = global;
const { expect } = chai;
const props = { todos: [], tasks: {}, options: {}, alert: {}, currentLoads: 0, actions: {} };

describe('[UT] <App />', () => {
  it('should render a <Wrapper />', () => {
    expect(shallow(<AppComponent {...props} />).find(
      Wrapper)).to.have.length(1);
  });

  it('should render a <Header />', () => {
    expect(shallow(<AppComponent {...props} />).find(
      Header)).to.have.length(1);
  });

  it('should render a <section> tag', () => {
    expect(shallow(<AppComponent {...props} />).find(
      'section')).to.have.length(1);
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
