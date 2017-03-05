import React, { Component } from 'react';

import HeroItem from './HeroItem';
import provider from './GlobalProvider.js';

export default class HeroesList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="heroes-list">
        {
          this.props.heroes.map(el => {
            return (
              <HeroItem
                key={el.id}
                id={el.id}
                name={el.name}
                hunger={el.hunger}
                avatar={el.avatar}
                canHire={this.props.canHire}
                hireButtonClick={(id) => {
                  provider.hireHero(id);
                  console.log('hired', id);
                  console.log('all hired:  ', provider.heroes.hired);
                }}
              />
            );
          })
        }
        <button onClick={() => provider.feedHeroes()}>Feed all hired heroes</button>
      </div>
    );
  }
};
