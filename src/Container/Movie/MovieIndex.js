import React,{Component} from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './MovieIndex.css';
import { Route } from 'react-router-dom';
import {
   MovieHome
  , MovieAbout
  , MovieLogin
  , MovieFooter
  // , MovieMenu
  , MovieBoard
  , MovieList
  ,PlainTemplate,
  MovieDetail,
  Header
} from 'Route/Main';

class MovieIndex extends Component {
  state = {
    date: null,
    existMenu: false,
  }
  render() {
    const { pathname } = this.props.location;
    return (
      <PlainTemplate 
        header={<Header url={pathname} 
        trapUrl={['/', '/movie/all']} 
        activeClass={'movie'}/>} size={'md'}>

        <Row>
          <Col span={24}>
            {/* Route는 깜빡이며 이동, Link는 바로이동 */}
            <Route exact path="/" component={MovieHome} />
            <Route exact path="/movie/detail/:id" component={MovieDetail} />
            <Route exact path="/about" component={MovieAbout} />
            <Route exact path="/movie/:category" component={MovieList} />
            <Route exact path="/board" component={MovieBoard} />
            <Route exact path="/login" component={MovieLogin} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <MovieFooter />
          </Col>
        </Row>
      </PlainTemplate>


    )
  }
}

export default MovieIndex;
