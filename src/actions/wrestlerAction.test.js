import expect from 'expect';
import * as wrestlerActions from './wrestlerActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync actions
describe('Wrestler Actions', () => {
  describe('createWrestlerSuccess', () => {
    it('should create a CREATE_WRESTLER_SUCCESS action', () => {
      //arrange
      const wrestler = {
        id: 'clean-code',
        email: 'Clean Code'
      };
      const expectedAction = {
        type: types.CREATE_WRESTLER_SUCCESS,
        wrestler: wrestler
      };

      //act
      const action = wrestlerActions.createWrestlerSuccess(wrestler);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_WRESTLERS_SUCCESS when loading wrestlers', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/wrestlers')
    //   .reply(200, {
    //     body: {
    //       wrestler: [{
    //         id: 1,
    //         firstName: 'Cory',
    //         lastName: 'House'
    //       }]
    //     }
    //   });

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_WRESTLERS_SUCCESS, body: {wrestlers: [{id: 'clean-code', email: 'Clean Code'}]}}
    ];

    const store= mockStore({wrestler: []}, expectedActions);
    store.dispatch(wrestlerActions.loadWrestlers()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_WRESTLERS_SUCCESS);
      done();
    });
  });
});
