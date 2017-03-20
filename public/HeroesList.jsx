import React, { Component } from 'react';
import HeroItem from './HeroItem';
import provider from './GlobalProvider.js';

export default class HeroesList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const isListOfVacant = (this.props.section === 'vacant');

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
                payment={el.payment}
                hireButtonIsNeeded={isListOfVacant}
                hireHero={this.props.hireHero}
              />
            );
          })
        }
        <div className="temp-btns" style={{ display: isListOfVacant ? 'none' : 'block'}}>
          <button onClick={() => this.props.forceDayFinish()}>Force day finish</button>
          <button onClick={() => this.props.hireNewHero()}>Hire new hero</button>
        </div>
      </div>
    );
  }
};
