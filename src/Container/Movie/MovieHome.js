import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import './MovieHome.css';

import axios from 'axios';
import styled from '@emotion/styled';

import { SliderSlick } from 'Components/Module/SlickSlider'
import { MoviePoster } from 'Route/Main';
import { _PlainButton, _genreButton, _boxButton, _gradeButton } from 'Route/Styled';

// api
import {GetSlideData}  from 'Api/Api';

let mainTitleArr = [
  "Weekly Watchlist"
  , "Most Popular"
  , "Family Movies"
  , "Horror"
  , "Comedy"
  , "Documentary"
  , "Romance"
  , "Stand Up Comedy"
  , "Sci-fi - Fantasy"
  , "Foreign Language Films"
  , "Faith"
  , "Cult Classics"
  , "Thrillers"
  , "Sports Movies - Shows"
  , "Drama"
];

const WhiteLoading = styled.div`
position:fixed;
left:0;
top:0;
width:100%;
height:100%;
background:#202026;
z-index:500001;
transition:.5s;
`;
const LoadingIcon = ({ className }) => <Icon type="loading" className={className} />;
const LoadingIconClass = styled(LoadingIcon)`
position:absolute;
left:50%;
top:50%;
transform:translate(-50%,-50%);
font-size:30px;
color:#fff;
`;

const MainSlideBox = styled.div`
position:relative;
`

class MoviePosterRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const props = this.props;
    return (
      <div className="movie__home_row">
        <div className="movie__home_row_title_box">
          <span className="movie__home_title_tx">{props.category}</span>
          <span className="movie__home_title_more_box">
            <Icon type="ellipsis" />
          </span>
        </div>
        <div className="movie__poster_box_control">
          <SliderSlick config={{
                slidesToShow: 7
                , slidesToScroll: 7
                , infinite: true
              }}
              list={props.movies && props.movies.map((info, i) => {
            return <MoviePoster
              link={`/movie/detail/${info.id}`}
              key={info.id}
              movieInfo={info}
              onClick={this.handleClick} 
              
              />
          })} />
        </div>
      </div>
    )
  }
}


class MovieHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderIndex: 0,
      sliderLink: null,
      slideList: [],
      movieList: [],
      isLoading:true,
      scrollIdx:3
    }
  }

  componentWillUnmount() {
    // 언마운트 될때에, 스크롤링 이벤트 제거
    window.removeEventListener("scroll", this.handleScroll);
  }

   componentDidMount() {

    const main = this;
    GetSlideData().then(axios.spread(function (mainSlideList, week, populal, rating, genre) {
      main.setState((prevState, prevProps) => ({
        slideList: prevState.slideList.concat(mainSlideList.data.data.movies),
        movieList: prevState.movieList.concat(
          [{
            category: 'Weekly Watchlist',
            movies: week.data.data.movies
          },
          {
            category: 'Most Pupular',
            movies: populal.data.data.movies
          },
          {
            category: 'Highest Rating',
            movies: rating.data.data.movies
          }, {
            category: 'Family Movies',
            movies: genre.data.data.movies
          }]),
      }));
   }))

      window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(){
    console.log('update');
    // this.setState({
    //   isLoading:false
    // })
  }

  handleScroll = () => {
    // mainTitleArr.length;
    const main = this;
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (scrollHeight - innerHeight - scrollTop < 100) {
      console.log("Almost Bottom Of This Browser");
      // if (!this.props.isLoading && !this.props.isLast) {
        console.log(mainTitleArr.length );
        console.log(this.state.scrollIdx);
        
        if(mainTitleArr.length > this.state.scrollIdx){
          console.log('scroll');
          if (!this.state.isLoading ) {
            axios.get(`http://localhost:5000/movie?sort_by=download_count&page=${main.state.scrollIdx}`)
            .then((val) =>{
              this.setState((prevState, prevProps) => ({
                isLoading:true,
                scrollIdx:prevState.scrollIdx +1,
                movieList: prevState.movieList.concat(
                  [{
                    category: mainTitleArr[main.state.scrollIdx],
                    movies: val.data.data.movies
                  }]),
                  
              }));
            })

        }
        }else{
          console.log('end');
        }

    }

  }
  changeSliderIndex = (index) => {
    // this.setState({
    //   sliderLink: this.state.slideList[index].link
    // });
  }

  render() {
    const props = this.props;
    const movieList = this.state.movieList.map((list, i) => {
      return <MoviePosterRow 
      key={i} 
      category={list.category} 
      movies={list.movies} 
      />
    });

    const slideList = this.state.slideList.map((list, i) => (
      <Link to={list.link} key={i}  className="custom_slide__box">
        <h2 className="custom_slide__title">{list.title}</h2>
        <h2 className="custom_slide__summary">{list.summary}</h2>
        <h3 style={list.style} className="custom_slide"></h3>
      </Link>
    ));

    const Main = () => (
      <div>
        <MainSlideBox >
        <Link to="/" className="main__watch_btn">
          <span className="main__watch_btn_tx">Watch Now
            <span className="main__watch_btn_tx_free">FREE</span>
          </span>
        </Link>
          <SliderSlick list={slideList} config={{
            slidesToShow: 1
            , slidesToScroll: 1
            , dots: false
            , infinite: true
            , fade: true
            , responsive:false
            , autoplay: true
            , autoplaySpeed: 1000
          }} />
        </MainSlideBox>
        <div className="movie__home_control">{this.state.movieList ? movieList : 'Loading...'}</div>
      </div>
    );

    return (
      <div>
        {this.state.movieList.length === 0
          ? <WhiteLoading>
            <LoadingIconClass />
          </WhiteLoading>
          : <Main />}
      </div>
    );
  }
}

export default MovieHome;

