const mockUp = {
  todos: [
    {
      id: 1,
      title: 'todo 1',
    },
    {
      id: 2,
      title: 'todo 2',
    },
    {
      id: 3,
      title: 'todo 3',
    },
  ],
  tasks: [
    {
      id: 1,
      todoId: 1,
      title: 'task 1',
      isChecked: true,
    },
    {
      id: 2,
      todoId: 1,
      title: 'task 2',
      isChecked: false,
    },
    {
      id: 3,
      todoId: 2,
      title: 'task 3',
      isChecked: true,
    },
    {
      id: 4,
      todoId: 2,
      title: 'task 4',
      isChecked: false,
    },
    {
      id: 5,
      todoId: 3,
      title: 'task 5',
      isChecked: true,
    },
  ],
  options: {
    showCompleted: true,
    sortByAsc: true,
  },
};

export default mockUp;
