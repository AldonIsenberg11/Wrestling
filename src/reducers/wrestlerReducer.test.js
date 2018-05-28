import expect from 'expect';
import wrestlerReducer from './wrestlerReducer';
import * as actions from '../actions/wrestlerActions';

describe('Wrestler Reducer', () => {
  it('should add wrestler when passed CREATE_WRESTLER_SUCCESS', () => {
    // arrange
    const initialState = [
      {email: 'A'},
      {email: 'B'}
    ];

    const newWrestler = {email: 'C'};

    const action = actions.createWrestlerSuccess(newWrestler);

    //act
    const newState = wrestlerReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].email).toEqual('A');
    expect(newState[1].email).toEqual('B');
    expect(newState[2].email).toEqual('C');
  });

  it('should update wrestler when passed UPDATE_WRESTLER_SUCCESS',() => {
    //arrange
    const initialState = [
      {usawId: 'A', email: 'A'},
      {usawId: 'B', email: 'B'},
      {usawId: 'C', email: 'C'}
    ];

    const wrestler = {usawId: 'B', email: 'New Email'};
    const action = actions.updateWrestlerSuccess(wrestler);

    //act
    const newState = wrestlerReducer(initialState, action);
    const updatedWrestler = newState.find(a => a.usawId == wrestler.usawId);
    const untouchedWrestler = newState.find(a => a.usawId == 'A');

    //assert
    expect(updatedWrestler.email).toEqual('New Email');
    expect(untouchedWrestler.email).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
