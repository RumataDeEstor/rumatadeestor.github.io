import React from 'react';
import { connect } from 'react-redux';
import { deactivateModal } from './actions';
import HeroesListContainer from '../heroes/HeroesListContainer';
import Modal from '../../Modal';

const mapStateToProps = state => ({
  isActive: state.modals.activeModals.includes('hireHero'),
  header: 'Hire hero',
  content: <HeroesListContainer section='vacant' />,
});

const mapDispatchToProps = dispatch => ({
  deactivate: () => dispatch(deactivateModal('hireHero')),
});

const HireHeroContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

export default HireHeroContainer;
