import { connect } from 'react-redux';
import HeroesList from '../../HeroesList';
import { activateModal } from '../modals/actions';
import { hireHero } from './actions';
import provider from '../../GlobalProvider';
import { changeFood } from '../resources/actions';
import { syncUpdate } from '../sync/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    heroes: provider.heroes[ownProps.section],
    /*
      heroes: state.heroes[ownProps.section]
      FIXME: double-check this, need to create strict straregy of synch.
      For now we take from provider directly, but still need to update store
      to force calling of this method :(
    */
  }
};

const mapDispatchToProps = dispatch => ({
  hireNewHero: () => dispatch(activateModal('hireHero')),
  hireHero: (id) => {
    provider.hireHero(id); // FIXME
    dispatch(hireHero(id));
  },
  forceDayFinish: () => {
    provider.forceDayFinish();
    // dispatch(changeFood());
    dispatch(syncUpdate());
    /*
      TODO: now I can use something like this, it must be automated later.
      Most likely, we should create separate sync for different domains (heroes, res, etc.)
      Or maybe not, we will see :)
    */
  },
});

const HeroesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroesList);

export default HeroesListContainer;
