import { combineReducers } from 'redux';
// import entities from './containers/entities/EntityReducers';
// import contexts from './containers/contexts/ContextReducers';
// import entityData from './containers/entities/EntityDataReducer';
import modals from './containers/modals/reducer';
import heroes from './containers/heroes/reducer';
import resources from './containers/resources/reducer';
import sync from './containers/sync/reducer';
// import graph from './containers/graph/graphReducer';


const rootReducer = combineReducers({
  modals,
  heroes,
  resources,
  sync,
});

export default rootReducer;
