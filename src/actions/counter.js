export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

export const increment = ({ value }) => ({
  type: COUNTER_INCREMENT,
  payload: value
});

export const decrement = ({ value }) => ({
  type: COUNTER_DECREMENT,
  payload: value
});
