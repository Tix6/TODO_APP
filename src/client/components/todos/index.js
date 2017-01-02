import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Todo from './todo/';
import { filterTodos } from '../../model';

export const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Todos = ({ mode, todos, tasks, dispatch, actions }) =>
  <Section>
    {filterTodos(todos, tasks, mode).map(
      todo => <Todo
        todo={todo}
        tasks={tasks}
        dispatch={dispatch}
        actions={actions}
        key={todo.id}
      />)
    }
  </Section>
;

Todos.propTypes = {
  mode: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Todos;
