import React, { PropTypes } from 'react';
import { Switch } from 'antd';

const FilterTodos = ({ onSwitch, showCompleted }) =>
  <Switch
    checkedChildren="Show All"
    unCheckedChildren="Hide Comp."
    default={showCompleted}
    onChange={() => onSwitch()}
  />;

FilterTodos.propTypes = {
  onSwitch: PropTypes.func.isRequired,
  showCompleted: PropTypes.bool.isRequired,
};

export default FilterTodos;
