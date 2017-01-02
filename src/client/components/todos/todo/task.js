import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Checkbox, Button, Input } from 'antd';

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const Col = styled.div``;

class Task extends React.Component {
  state = {
    input: this.props.task.title,
    updateMode: false,
  }

  handleInput = e => this.setState({ input: e.target.value });

  handleSubmit = (task) => {
    const { dispatch, actions: { updateTask } } = this.props;
    const { input } = this.state;
    dispatch(updateTask({ ...task, title: input }));
    this.setState({ updateMode: false });
  }

  render() {
    const { input, updateMode } = this.state;
    const { task, dispatch, actions: { updateTask, delTask } } = this.props;
    return (
      <Row>
        <Col>
          <Checkbox
            onChange={() => dispatch(updateTask({ ...task, isChecked: !task.isChecked }))}
            checked={task.isChecked}
          />
          {updateMode ?
            (<Input
              placeholder={task.title}
              value={input}
              onChange={this.handleInput}
              size="small"
              style={{ width: '150px' }}
            />) :
            (<p style={{ display: 'inline', textDecoration: task.isChecked ? 'line-through' : '' }}>
              {task.title}
            </p>)
          }
        </Col>
        <Col>
          {updateMode ?
            (<Button icon="check" onClick={() => this.handleSubmit(task)} size="small" />) :
            (<Button icon="edit" onClick={() => this.setState({ updateMode: true })} size="small" />)
          }
          {updateMode ||
            <Button onClick={() => dispatch(delTask(task.id))} icon="close" size="small" />
          }
        </Col>
      </Row>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Task;
