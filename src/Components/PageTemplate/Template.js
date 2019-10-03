import React, { Component } from 'react';

class Template extends Component {
  render() {
    const {header, main, footer} = this.props;
    return (
      <div>
          {header}
          {main}
          {footer}
      </div>
    );
  }
}

export default Template;