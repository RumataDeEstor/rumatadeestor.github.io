import { ACTIVATE_MODAL, DEACTIVATE_MODAL } from './actions';
import createReducer from '../../utils/reduxUtils';

const initialModalState = {
  activeModals: [],
};

const modals = createReducer(initialModalState, {
  [ACTIVATE_MODAL]: (state, action) => ({
    activeModals: (state.activeModals.includes(action.modalName)) ?
      state.activeModals :
      [...state.activeModals, action.modalName],
  }),
  [DEACTIVATE_MODAL]: (state, action) => ({
    activeModals: state.activeModals.filter(modal => modal !== action.modalName),
  }),
});

export default modals;
