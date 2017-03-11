import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.onOverlay = this.onOverlay.bind(this);
  }

  onOverlay(e) {
    if (e.target.className !== 'modal-container') return;
    this.props.deactivate();
  }

  render() {
    const { header, content, footer, isActive } = this.props;

    return (
      <div className={`modal-container${isActive ? '' : '_hidden'}`}
        onClick={this.onOverlay}
      >
        <div className="modal-container__modal">
          <div className="modal-container__modal-header">
            { header }
          </div>
          <div className="modal-container__modal-content">
            { content }
          </div>
          <div className="modal-container__modal-footer">
            { footer }
          </div>
        </div>
      </div>
    )
  }
}
