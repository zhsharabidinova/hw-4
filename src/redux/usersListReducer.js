import { types } from "./types";

const initialState = {
  usersList: [],
};

export function usersListReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_USER:
      return {...state,usersList: [...state.usersList, action.payload]};
    default: return state;
  }
}
