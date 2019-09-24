import React, { Component } from 'react';
import MovieMenu from './MovieMenu';
import {DatePicker, message, Row,Col,Icon} from 'antd';
import { Route, Link } from 'react-router-dom';

class Movie extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={6}>
            <Route path="/movie/:category" component={MovieMenu}  />
          </Col>
          <Col span={18}>
             MovieList
          </Col>
        </Row>

        
      </div>
    );
  }
}

export default Movie;