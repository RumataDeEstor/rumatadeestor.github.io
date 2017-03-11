import React, { Component } from 'react';

const HireButton = ({ hireHero }) => (
  <div className="heroes-list__hire-button-container">
    <button className="heroes-list__hire-button"
      onClick={hireHero}
    >
      HIRE
    </button>
  </div>
);

export default class HeroItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, id, hunger, avatar, hireButtonIsNeeded, hireHero } = this.props;

    return (
      <div className="heroes-list__item">
        <img src={avatar} className="heroes-list__pic"/>
        <span> {name} </span>
        <span> {hunger} </span>
        { hireButtonIsNeeded ? <HireButton hireHero={() => hireHero(id)}/> : null}
      </div>
    );
  }
}
