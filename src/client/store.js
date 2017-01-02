import React, { PropTypes } from 'react';

const baseStore = {
  listeners: [],
  listen(cb) {
    this.listeners.push(cb);
  },
  update() {
    this.listeners.forEach(cb => cb());
  },
  dispatch(action) {
    this.state = action(this.state);
    console.log('state : ', this.state); // eslint-disable-line no-console
    this.update();
  },
};

export class Provider extends React.Component {
  componentWillMount() {
    const { store } = this.props;
    store.listen(() => this.forceUpdate());
  }
  render() {
    const { store, actions, children } = this.props;
    return React.cloneElement(
      React.Children.only(children),
      { store, actions }
    );
  }
}

Provider.propTypes = {
  store: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export const createStore = state => ({
  ...baseStore,
  state,
});
