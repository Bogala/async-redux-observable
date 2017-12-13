import { FETCH_USER_FULFILLED } from './user.actions';

export const users = (state = {}, action) => {
    switch (action.type) {
      case FETCH_USER_FULFILLED:
        return {
          ...action.payload
        };
      default:
        return state;
    }
  };