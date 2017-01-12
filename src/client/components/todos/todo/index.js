import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Card, Button } from 'antd';
import Task from './task';
import AddTask from './add_task';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoHeader = ({ todo, actions }) =>
  <Header>
    <h3>{todo.title}</h3>
    <Button onClick={() => actions.delTodo(todo.id)} type="ghost" shape="circle" icon={'close'} size="small" />
  </Header>
;

TodoHeader.propTypes = {
  todo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const Todo = ({ todo, tasks = [], actions }) =>
  <Card
    title={
      <TodoHeader
        todo={todo}
        actions={actions}
      />}
    style={{ margin: '10px' }}
    bodyStyle={{ padding: '10px' }}
  >
    <AddTask onAdd={actions.addTask} todoId={todo.id} />
    <ul>
      {
        tasks.map(task =>
          <li key={task.id}>
            <Task
              task={task}
              actions={actions}
              key={task.id}
            />
          </li>
      )}
    </ul>
  </Card>
;

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  tasks: PropTypes.array,
  actions: PropTypes.object.isRequired,
};

export default Todo;
