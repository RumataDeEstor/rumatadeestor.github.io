import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import HeroesListContainer from './containers/heroes/HeroesListContainer';
import provider from './GlobalProvider.js';
import configureStore from './configureStore';
import HireHeroModal from './containers/modals/HireHeroContainer';
import PanelContainer from './containers/resources/PanelContainer';

const store = configureStore();

provider.createPortionOfRandomHeroes(5); // FIXME: temporary. Day start event.

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>
            In development. ;)
          </h1>
          <h2>
            For now you can hire hero and feed all heroes.
            Use your console to get some info.
          </h2>
          <PanelContainer />
          <HeroesListContainer section='hired'/>
          <HireHeroModal />          
        </div>
      </Provider>
    );
  }
}

render(
  <Root />,
  document.getElementById('root')
);
