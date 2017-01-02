import React, { PropTypes } from 'react';
import { Switch } from 'antd';

const FilterTodos = ({ dispatch, onSwitch, showCompletedTodos }) =>
  <Switch
    checkedChildren="Show All"
    unCheckedChildren="Hide Comp."
    default={showCompletedTodos}
    onChange={() => dispatch(onSwitch())}
  />;

FilterTodos.propTypes = {
  dispatch: PropTypes.func,
  onSwitch: PropTypes.func,
  showCompletedTodos: PropTypes.bool,
};

export default FilterTodos;
