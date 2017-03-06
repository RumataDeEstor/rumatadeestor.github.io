import React, { Component } from 'react'
import { render } from 'react-dom'
import HeroesList from './HeroesList';
import provider from './GlobalProvider.js';
import { getRandomInt } from './helpers';
import heroes from './heroes.json';

function getRandomName() {
  return heroes.names[getRandomInt(0, heroes.names.length - 1)];
}

function getRandomAvatar() {
  return heroes.avatars[getRandomInt(0, heroes.avatars.length - 1)];
}

// test

for (let i=0; i<15; i++) {
  provider.createHero({
    name: getRandomName(),
    hunger: getRandomInt(70, 200),
    avatar: getRandomAvatar()
  });
}

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
