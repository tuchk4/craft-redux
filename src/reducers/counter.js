import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT
} from '../actions/counter';

const initialState = {
  value: parseInt(process.env.REACT_APP_INITIAL_COUNTER, 10)
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case COUNTER_INCREMENT:
      return {
        value: state.value + payload
      };

    case COUNTER_DECREMENT:
      return {
        value: state.value - payload
      };

    default:
      return state;
  }
};
