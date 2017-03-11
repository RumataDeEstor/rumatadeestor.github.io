import { HIRE_HERO } from './actions';
import createReducer from '../../utils/reduxUtils';
import provider from '../../GlobalProvider';

let initialHeroState = {
  hired: provider.heroes.hired,
  vacant: provider.heroes.vacant,
  // FIXME
};

const heroes = createReducer(initialHeroState, {
  [HIRE_HERO]: (state, action) => ({
    hired: provider.heroes.hired,
    vacant: provider.heroes.vacant,
    // FIXME
  }),
});

export default heroes;
