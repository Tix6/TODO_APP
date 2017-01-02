export const ADD_ALERT = 'alert/addAlert';

let alertId = 0;

export const addAlert = (message = 'error', type = 'error') => ({
  type: ADD_ALERT,
  payload: { id: (alertId += 1), type, message },
});
