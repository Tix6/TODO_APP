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

const Menu = ({ dispatch, actions, mode }) =>
  <Section>
    <AddTodo dispatch={dispatch} onAdd={actions.addTodo} />
    <Filters>
      <SortTodos
        dispatch={dispatch}
        onSwitch={actions.sortByAsc}
        sortByAsc={mode.sortByAsc}
      />
      <FilterTodos
        dispatch={dispatch}
        onSwitch={actions.showCompleted}
        showCompletedTodos={mode.showCompletedTodos}
      />
    </Filters>
  </Section>;

Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  mode: PropTypes.object.isRequired,
};

export default Menu;
