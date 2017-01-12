import { SHOW_COMPLETED, SORT_BY_ASC } from '../actions/options';

const options = (state = {}, action = {}) => {
  switch (action.type) {
    case SHOW_COMPLETED:
      return { ...state, showCompleted: !state.showCompleted };
    case SORT_BY_ASC:
      return { ...state, sortByAsc: !state.sortByAsc };
    default:
      return state;
  }
};

export default options;
