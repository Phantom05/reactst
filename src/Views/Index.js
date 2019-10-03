import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import { Route, Switch } from 'react-router-dom';
import PlainTemplate from 'Components/PageTemplate/PlainTemplate'
import { 
  MovieHome,
  MovieAbout,
  MovieDetail,
  MovieList,
  MovieLogin,
  MovieBoard,
  MovieFooter,
  Header } from 'CrossLoads/Main';

class Index extends Component {
  state = {
    date: null,
    existMenu: false,
    footer:true,
    header:true,
  }

  hiddenLayout = (target) =>{
    console.log(target,'target');
    if(target === 'header'){
      this.setState({
        header:false
      })
    }
    if(target === 'footer'){
      this.setState({
        footer:false
      })
    }
  }


  componentDidMount(){


  }

  

  render() {

    const { pathname } = this.props.location;
    const state = this.state;
    return (
      // <Test/>
      <PlainTemplate
        header={ state.header && <Header 
          url={pathname}
          trapUrl={['/', '/movie/all']}
          activeClass={'movie'} />} 
        size={'md'}
        theme="black">
        <Row>
          <Col span={24}>
            <Switch>
              <Route exact path="/" component={MovieHome} />
              <Route exact path="/movie/detail/:id" component={MovieDetail} />
              <Route exact path="/about" component={MovieAbout} />
              <Route exact path="/movie/:category" component={MovieList} />
              <Route exact path="/board" component={MovieBoard} />
              <Route exact path="/login" render={() =>  <MovieLogin controlLayout={this.hiddenLayout} />} />
            </Switch>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            {state.footer && <MovieFooter />}
          </Col>
        </Row>
      </PlainTemplate>
    );
  }
}

export default Index;