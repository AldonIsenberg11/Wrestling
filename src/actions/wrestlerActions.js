import * as types from './actionTypes';
import wrestlerApi from '../api/mockWrestlerApi';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';

export function loadWrestlersSuccess(wrestlers) {
  return { type: types.LOAD_WRESTLERS_SUCCESS, wrestlers};
}

export function createWrestlerSuccess(wrestler) {
  return {type: types.CREATE_WRESTLER_SUCCESS, wrestler};
}

export function updateWrestlerSuccess(wrestler) {
  return {type: types.UPDATE_WRESTLER_SUCCESS, wrestler};
}

export function loadWrestlers() {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    return wrestlerApi.getAllWrestlers().then(wrestlers => {
      dispatch(loadWrestlersSuccess(wrestlers));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveWrestler(wrestler) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());

    return wrestlerApi.saveWrestler(wrestler).then(savedWrestler => {
      wrestler.id ? dispatch(updateWrestlerSuccess(savedWrestler)) :
        dispatch(createWrestlerSuccess(savedWrestler));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
