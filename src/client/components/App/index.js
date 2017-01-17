import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { todosSelector, tasksSelector } from '../../selectors/';
import Menu from '../menu/';
import Todos from '../todos/';
import actionList from '../../actions/';
import Header from '../header/';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AppComponent = ({ todos, tasks, options, alert, currentLoads, actions }) =>
  <Wrapper>
    <Header alert={alert} currentLoads={currentLoads} />
    <section>
      <Menu options={options} actions={actions} />
      <Todos todos={todos} tasks={tasks} actions={actions} />
    </section>
  </Wrapper>;

AppComponent.propTypes = {
  todos: PropTypes.array,
  tasks: PropTypes.object,
  options: PropTypes.object,
  alert: PropTypes.object,
  currentLoads: PropTypes.number,
  actions: PropTypes.object,
};

const mapStateToProps = state => ({
  todos: todosSelector(state),
  tasks: tasksSelector(state),
  options: state.options,
  alert: state.alert,
  currentLoads: state.currentLoads,
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionList, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
