import React, { PropTypes } from 'react';
import styled from 'styled-components';
import AddTodo from './add_todo';
import FilterTodos from './filter_todos';
import SortTodos from './sort_todos';

export const Section = styled.section`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100px;
`;

export const Filters = styled.div`
  align-self: flex-start;
`;

const Menu = ({ options, actions }) =>
  <Section>
    <AddTodo onAdd={actions.addTodo} />
    <Filters>
      <SortTodos
        onSwitch={actions.sortByAsc}
        sortByAsc={options.sortByAsc}
      />
      <FilterTodos
        onSwitch={actions.showCompleted}
        showCompleted={options.showCompleted}
      />
    </Filters>
  </Section>;

Menu.propTypes = {
  options: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Menu;
