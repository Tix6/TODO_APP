import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Todo from './todo/';

export const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Todos = ({ todos, tasks, actions }) =>
  <Section>
    {todos.map(todo =>
      <Todo
        todo={todo}
        tasks={tasks[todo.id]}
        actions={actions}
        key={todo.id}
      />)
    }
  </Section>
;

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  tasks: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Todos;
