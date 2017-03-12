import React, { Component } from 'react';

export default class ResourcesPanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="resources-panel">
        <div className="resources-panel_food-section">
          FOOD: 
          { this.props.food }
        </div>
      </div>
    );
  }
};
