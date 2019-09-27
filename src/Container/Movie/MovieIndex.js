import React,{Component} from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './MovieIndex.css';
import { Route } from 'react-router-dom';
import {
  MovieHeader
  , MovieHome
  , MovieAbout
  , MovieLogin
  , MovieFooter
  // , MovieMenu
  , MovieBoard
  , MovieList
  ,PlainTemplate
} from 'Route/Main';

// import axios from 'axios';
// import GridLayout from 'react-grid-layout';

class MovieIndex extends Component {
  state = {
    date: null,
    existMenu: false,
    text:0
  }

  handleChange =() =>{
    this.setState((prevState,state)=>({
      text:prevState.text+1
    }));
    console.log(this.state.text);
  }

  render() {
    const { pathname } = this.props.location;
    return (
      <PlainTemplate header={<MovieHeader url={pathname}  />} size={'md'}>
        <Row>
          <Col span={24}>
            {/* Route는 깜빡이며 이동, Link는 바로이동 */}
            <Route exact path="/" component={MovieHome} />
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



  // constructor(props){
  //   super(props);
  //   this.state={
  //     error:null,
  //     isLoaded:false,
  //     // items:[]
  //   }
  // }

  // componentDidMount(){
  //   // `https://yts.tl/api/v2/list_movies.json?sort_by=rating`
  //   // let apiAddress = `https://api.bithumb.com/public/ticker/BTC`
  //   // apiAddress  = `https://www.themoviedb.org/discover/movie?sort_by=popularity.desc`
  //   // const conf = {
  //   //   method:`get`,
  //   //   url:apiAddress
  //   // }
  //   // axios(conf).then((data)=>{
  //   //   console.log(data);
  //   // })
  //   this.setState({
  //     items:<img src="https://blogsimages.adobe.com/creativedialogue/files/2018/12/Adobe-Photoshop-Bestmoments2018-Blog-Tutorial-1-819x1024.jpg" />
  //   })
  // }

  // _renderMovies = () =>{
  //   return (
  //     <div>
  //       {this.state.items}
  //     </div>
  //   )
  // }
