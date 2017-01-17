import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Header, { Wrapper } from '../';
import Title from '../title';
import Alert from '../alert';
import Loading from '../loading';

const { describe, it } = global;
const { expect } = chai;
const props = { alert: {}, currentLoads: 0 };

describe('[UT] <Header />', () => {
  it('should renders a <Wrapper />', () => {
    expect(shallow(<Header {...props} />).find(
      Wrapper)).to.have.length(1);
  });

  it('should renders a <Loading />', () => {
    expect(shallow(<Header {...props} />).find(
      Loading)).to.have.length(1);
  });

  it('should renders a <Alert />', () => {
    expect(shallow(<Header {...props} />).find(
      Alert)).to.have.length(1);
  });

  it('should renders a <Title />', () => {
    expect(shallow(<Header {...props} />).find(
      Title)).to.have.length(1);
  });
});
