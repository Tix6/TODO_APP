import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Spin } from 'antd';
import Loading, { Wrapper } from '../';

const { describe, it } = global;
const { expect } = chai;

const props = { currentLoads: 0 };

describe('[UT] <Loading /> (currentLoads === 0)', () => {
  it('should renders a <Wrapper />', () => {
    expect(shallow(<Loading {...props} />).find(
      Wrapper)).to.have.length(1);
  });

  it('should NOT renders a <Spin />', () => {
    expect(shallow(<Loading {...props} />).find(
      Spin)).to.have.not.length(1);
  });
});
