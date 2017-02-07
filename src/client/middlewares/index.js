export const socketIoMiddleWare = socket => ({ dispatch }) => {
  socket.on('action', action => dispatch(action));
  return next => action => next(action);
  // return next => (action) => {
  //   if (action.type && action.type.indexOf('server/') === 0) socket.emit('action', action);
  //   return next(action);
  // };
};
