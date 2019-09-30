import React, { Component } from 'react';
import { Icon } from 'antd';
import axios from 'axios';
import styled from '@emotion/styled';


const Main = styled.div`
  color:#fff;
  padding-top:80px;
`

class MovieDetail extends Component {
  constructor(props){
    super(props);
    this.state={
      movieInfo:[]
    }
  }
  
  componentDidMount(){
    console.log('detail page in!');
    let main = this;
    let movieId = this.props.match.params.id;
     axios.get(`http://localhost:5000/movie/detail?movie_id=${movieId}`)
      .then(function(response){
        let movieInfo = response.data.data.movie;
        main.setState({
          movieInfo:movieInfo
        });
      })
  }


  render() {
    const [props,state] = [this.props,this.state];
    console.log(this.state.movieInfo);
    return (
      <Main>
        <h1>{state.movieInfo.title}</h1>
        <img src={`https://yts.tl/${state.movieInfo.large_cover_image}`}></img>
      </Main>
    );
  }
}

export default MovieDetail;