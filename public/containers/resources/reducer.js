import { CHANGE_FOOD } from './actions';
import createReducer from '../../utils/reduxUtils';
import provider from '../../GlobalProvider';

let initialResourcesState = {
  food: provider.foodSupply(), // once
  // FIXME
};

// FIXME: to check, maybe it is reduntant
const resources = createReducer(initialResourcesState, {
  [CHANGE_FOOD]: (state, action) => ({
    food: provider.foodSupply(),  // multiple
    // FIXME
  }),
});

export default resources;
