import React, { Component } from 'react'
import { render } from 'react-dom'
import HeroesList from './HeroesList';
import provider from './GlobalProvider.js';

// test
provider.createHero({ name: 'Edrard', hunger: 100, avatar: './img/avatar0.png' });

provider.createHero({ name: 'Mihael', hunger: 150, avatar: './img/avatar1.png' });

provider.createHero({ name: 'Alonzo', hunger: 200, avatar: './img/avatar2.png' });

provider.createHero({ name: 'Volodar', hunger: 175, avatar: './img/avatar3.png' });

provider.createHero({ name: 'Vovarian', hunger: 98, avatar: './img/avatar4.png' });

console.log('All existent heroes', provider.heroes.all);

class Root extends Component {
  render() {
    return (
      <div className="root">
        <h1>
          In development. ;)
        </h1>
        <h2>
          For now you can hire hero and feed all heroes.
          Use your console to get some info.
        </h2>
        <HeroesList
          heroes={provider.heroes.vacant}
          canHire
        />
      </div>
    );
  }
}

render(
  <Root />,
  document.getElementById('root')
);
