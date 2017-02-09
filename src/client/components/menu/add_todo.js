import React, { PropTypes } from 'react';
import { Form, Input, Button } from 'antd';
import debounce from 'debounce';

const FormItem = Form.Item;

class AddTodo extends React.Component {
  state = {
    input: '',
  };

  handleInput = (e) => {
    const { value } = e.target;
    const { onSearch } = this.props;
    /* FAIL */
    debounce(onSearch(value), 200);
    this.setState({ input: value });
  }

  handleSubmit = (e) => {
    const { input } = this.state;
    const { onAdd } = this.props;
    e.preventDefault();
    onAdd(input);
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
            placeholder="create or search"
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
  onAdd: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default AddTodo;
