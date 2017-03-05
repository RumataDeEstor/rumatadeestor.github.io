import React, { Component } from 'react';

export default class HeroItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, id, hunger, avatar, canHire, hireButtonClick } = this.props;
    const HireButton = () => (
      <button onClick={() => hireButtonClick(id)}> Hire </button>
    );
    return (
      <div className="heroes-list__item">
        <img src={avatar} className="heroes-list__pic"/>
        <span> {name} </span>
        <span> {hunger} </span>
        { canHire ? <HireButton /> : null}
      </div>
    )
  }
}
