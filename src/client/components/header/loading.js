import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

export const Wrapper = styled.div`
  text-align: center;
  padding: 10px;
  height: 40px;
`;

const Loading = ({ currentLoads }) =>
  <Wrapper>
    { (currentLoads > 0) && <Spin /> }
  </Wrapper>;

Loading.propTypes = {
  currentLoads: PropTypes.number.isRequired,
};

export default Loading;
