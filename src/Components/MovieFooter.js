import React, { Component } from 'react';
import {DatePicker, message, Row,Col,Icon} from 'antd';
import './MovieFooter.css'

class MovieFooter extends Component {
  render() {
    return (
      <header className="MovieFooter">
        
        {/* <Icon type="up-circle" /> */}
        <div className="rightBotton">
        Copyright © PhantomMovie All rights reserved.
        </div>
      </header>
    );
  }
}

export default MovieFooter;