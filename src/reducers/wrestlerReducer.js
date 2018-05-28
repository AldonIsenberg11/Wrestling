import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function wrestlerReducer(state = initialState.wrestlers, action) {
  switch(action.type) {

    case types.LOAD_WRESTLERS_SUCCESS:
      return action.wrestlers;

    case types.CREATE_WRESTLER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.wrestler)
      ];

    case types.UPDATE_WRESTLER_SUCCESS:
      return [
        ...state.filter(wrestler => wrestler.usawId !== action.wrestler.usawId),
        Object.assign({}, action.wrestler)
      ];

    default:
      return state;
  }
}
