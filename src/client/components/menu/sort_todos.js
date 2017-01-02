import React, { PropTypes } from 'react';
import { Switch } from 'antd';

const SortTodos = ({ dispatch, onSwitch, sortByAsc }) =>
  <Switch
    checkedChildren="Sort"
    unCheckedChildren="Rev."
    default={sortByAsc}
    onChange={() => dispatch(onSwitch())}
    style={{ width: '5em' }}
  />;

SortTodos.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSwitch: PropTypes.func.isRequired,
  sortByAsc: PropTypes.bool.isRequired,
};

export default SortTodos;
