import React, { PropTypes } from 'react';
import { Switch } from 'antd';

const SortTodos = ({ onSwitch, sortByAsc }) =>
  <Switch
    checkedChildren="Sort"
    unCheckedChildren="Rev."
    default={sortByAsc}
    onChange={() => onSwitch()}
    style={{ width: '5em' }}
  />;

SortTodos.propTypes = {
  onSwitch: PropTypes.func.isRequired,
  sortByAsc: PropTypes.bool.isRequired,
};

export default SortTodos;
