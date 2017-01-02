import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { createStore } from '../../../store';
import initialState from '../../../mockup';
import actions from '../../../actions';
import App, { Title } from '..';
import Menu from '../../menu/';
import Todos from '../../todos/';

const { describe, it } = global;
const { expect } = chai;
const store = createStore(initialState);

describe('[UT] <App />', () => {
  it('should render a <Title />', () => {
    expect(shallow(<App store={store} actions={actions} />).find(
      Title)).to.have.length(1);
  });

  it('should renders a <Menu />', () => {
    expect(shallow(<App store={store} actions={actions} />).find(
      Menu)).to.have.length(1);
  });

  it('should renders a <Todos />', () => {
    expect(shallow(<App store={store} actions={actions} />).find(
      Todos)).to.have.length(1);
  });
});
