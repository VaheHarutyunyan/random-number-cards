export const GET_RANDOM_NUMBER = "GET_RANDOM_NUMBER";
export const SORT_NUMBER = "SORT_NUMBER";
export const DELETE_NUMBER = "DELETE_NUMBER";

export const setRandomNumber = payload => ({
  type: GET_RANDOM_NUMBER,
  payload,
});
export const setDelete = id => ({
  type: DELETE_NUMBER,
  id,
});

export const setSort = number => ({
  type: SORT_NUMBER,
  number,
});
