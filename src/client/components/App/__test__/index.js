import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import App, { Title } from '..';

const { describe, it } = global;
const { expect } = chai;

describe('[UT] <App />', () => {
  it('should render a <Title />', () => {
    expect(shallow(<App />).find(Title)).to.have.length(1);
  });
});
