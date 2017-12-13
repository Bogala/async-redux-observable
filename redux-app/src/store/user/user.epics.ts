import { ActionsObservable } from 'redux-observable';
import { FETCH_USER, FETCH_USER_ERROR, FETCH_USER_FULFILLED, FETCH_USER_CANCEL } from './user.actions';

export interface ICustomAjaxError {
  type: string;
  message: string;
}

export const fetchUser = username => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });
export const fetchUserError = (message: string): ICustomAjaxError => ({ type: FETCH_USER_ERROR, message });
export const fetchUserCancel = () => ({ type: FETCH_USER_CANCEL });

// tslint:disable-next-line:no-shadowed-variable
export const fetchUserEpic = (action$: ActionsObservable<any>, store, { getJSON }) =>
  action$.ofType(FETCH_USER).delay(2000)
    .mergeMap(action => 
      getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => fetchUserFulfilled(response))
        .takeUntil(action$.ofType(FETCH_USER_CANCEL))
    );