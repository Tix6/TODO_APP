const actions = {
  addTodo(name) {
    return state => ({
      ...state,
      todos: state.todos.concat({
        title: name,
        id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1,
      }),
    });
  },
  delTodo(id) {
    return state => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id),
      tasks: state.tasks.filter(task => task.todoId !== id),
    });
  },
  addTask(task) {
    return state => ({
      ...state,
      tasks: state.tasks.concat({
        ...task,
        id: state.tasks.length ? state.tasks[state.tasks.length - 1].id + 1 : 1,
        isChecked: false,
      }),
    });
  },
  updateTask(updated) {
    return state => ({
      ...state,
      tasks: state.tasks.map(task => ((task.id === updated.id) ? updated : task)),
    });
  },
  delTask(id) {
    return state => ({
      ...state,
      tasks: state.tasks.filter(task => task.id !== id),
    });
  },
  showCompleted() {
    return state => ({
      ...state,
      mode: { ...state.mode, showCompletedTodos: !state.mode.showCompletedTodos },
    });
  },
  sortByAsc() {
    return state => ({
      ...state,
      mode: { ...state.mode, sortByAsc: !state.mode.sortByAsc },
    });
  },
};

export default actions;
