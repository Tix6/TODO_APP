import { ADD_ALERT } from '../actions/alert';

const alert = (state = {}, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ALERT:
      return payload;
    default:
      return state;
  }
};

export default alert;
