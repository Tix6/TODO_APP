import React, { PropTypes } from 'react';
import { message } from 'antd';

class Alert extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.alert.id !== nextProps.alert.id) {
      message[nextProps.alert.type](nextProps.alert.message);
    }
  }

  render() {
    return null;
  }
}

Alert.propTypes = {
  alert: PropTypes.object,
};

export default Alert;
