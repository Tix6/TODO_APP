import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Menu from '../menu/';
import Todos from '../todos/';
import actionList from '../../actions/';
import { todosSelector, tasksSelector } from '../../selectors/';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Title = ({ title }) => <h1>{title}</h1>;
Title.propTypes = { title: PropTypes.string.isRequired };

export const AppComponent = ({ todos, tasks, options, actions }) =>
  <Wrapper>
    <Header>
      <Title title={'Todo List'} />
    </Header>
    <section>
      <Menu options={options} actions={actions} />
      <Todos todos={todos} tasks={tasks} actions={actions} />
    </section>
  </Wrapper>;

AppComponent.propTypes = {
  todos: PropTypes.array,
  tasks: PropTypes.object,
  options: PropTypes.object,
  actions: PropTypes.object,
};

const mapStateToProps = state => ({
  todos: todosSelector(state),
  tasks: tasksSelector(state),
  options: state.options,
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionList, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
