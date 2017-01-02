import React, { PropTypes } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class AddTodo extends React.Component {
  state = {
    input: '',
  };

  handleInput = e => this.setState({ input: e.target.value });

  handleSubmit = (e) => {
    const { dispatch, onAdd } = this.props;
    const { input } = this.state;
    e.preventDefault();
    dispatch(onAdd(input));
    this.setState({ input: '' });
  }

  render() {
    const { input } = this.state;
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormItem>
          <Input
            value={input}
            onChange={this.handleInput}
            placeholder="todo's title"
            style={{ width: '300px' }}
            required
          />
        </FormItem>
        <FormItem>
          <Button size="large" htmlType="submit" icon="plus" />
        </FormItem>
      </Form>
    );
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default AddTodo;
