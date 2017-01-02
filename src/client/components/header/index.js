import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Title from './title';
import Alert from './alert';
import Loading from './loading';

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Header = ({ alert, currentLoads }) =>
  <Wrapper>
    <Loading currentLoads={currentLoads} />
    <Alert alert={alert} />
    <Title title={'Todo List'} />
  </Wrapper>;

Header.propTypes = {
  alert: PropTypes.object,
  currentLoads: PropTypes.number.isRequired,
};

export default Header;
