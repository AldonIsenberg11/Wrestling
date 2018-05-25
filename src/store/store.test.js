import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as wrestlerActions from '../actions/wrestlerActions';

describe('Store', function () {
  it('Should handle creating wrestlers', function () {
    //arrange
    const store = createStore(rootReducer, initialState);
    const wrestler = {
      email: "Clean Code"
    };

    //act
    const action = wrestlerActions.createWrestlerSuccess(wrestler);
    store.dispatch(action);

    // assert
    const actual = store.getState().wrestlers[0];
    const expected = {
      email: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });
});
