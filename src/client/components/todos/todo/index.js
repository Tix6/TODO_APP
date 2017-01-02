import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Card, Button } from 'antd';
import Task from './task';
import AddTask from './add_task';
import { matchTasksWithTodo } from '../../../model';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoHeader = ({ todo, dispatch, actions }) =>
  <Header>
    <h3>{todo.title}</h3>
    <Button onClick={() => dispatch(actions.delTodo(todo.id))} type="ghost" shape="circle" icon={'close'} size="small" />
  </Header>
;

TodoHeader.propTypes = {
  todo: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

const Todo = ({ todo, tasks, dispatch, actions }) =>
  <Card
    title={
      <TodoHeader
        todo={todo}
        dispatch={dispatch}
        actions={actions}
      />}
    style={{ margin: '10px' }}
    bodyStyle={{ padding: '10px' }}
  >
    <AddTask dispatch={dispatch} onAdd={actions.addTask} todoId={todo.id} />
    <ul>
      {matchTasksWithTodo(tasks, todo).map(task =>
        <li key={task.id}>
          <Task
            task={task}
            dispatch={dispatch}
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
  tasks: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Todo;
