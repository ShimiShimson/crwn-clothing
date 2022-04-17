
export const logger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log('action: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currentState: ', store.getState());

  next(action);

  console.log('nextState: ', store.getState());
};
