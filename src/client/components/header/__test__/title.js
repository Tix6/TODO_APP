import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Title from '../title';

const { describe, it } = global;
const { expect } = chai;

const props = { title: 'todo app' };

describe('[UT] <Title />', () => {
  it('should renders a <Wrapper />', () => {
    expect(shallow(<Title {...props} />).find(
      'h1')).to.have.length(1);
  });
});
