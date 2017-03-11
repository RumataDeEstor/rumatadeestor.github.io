import { connect } from 'react-redux';
import HeroesList from '../../HeroesList';
import { activateModal } from '../modals/actions';
import { hireHero } from './actions';
import provider from '../../GlobalProvider';

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
  }
});

const HeroesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroesList);

export default HeroesListContainer;
