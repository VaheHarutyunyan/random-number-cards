import {
  GET_RANDOM_NUMBER,
  DELETE_NUMBER,
  SORT_NUMBER,
} from "./generator-action";

const initialState = {
  numbers: [],
};

export const generatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_NUMBER:
      return {
        ...state,
        numbers: [...state.numbers, action.payload],
      };
    case DELETE_NUMBER:
      return {
        ...state,
        numbers: state.numbers.filter(item => item.id !== action.id),
      };
    case SORT_NUMBER:
      return {
        ...state,
        numbers: state.numbers.sort(function (a, b) {
          return a.number - b.number;
        }),
      };

    default:
      return state;
  }
};
