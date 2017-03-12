import { SYNC_UPDATE } from './actions';
import createReducer from '../../utils/reduxUtils';

let initialState = {
  updated: null,
};

const sync = createReducer(initialState, {
  [SYNC_UPDATE]: (state, action) => ({
    updated: action.time,
  }),
});

export default sync;
