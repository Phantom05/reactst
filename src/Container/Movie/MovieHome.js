import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import './MovieHome.css';

import axios from 'axios';
import styled from '@emotion/styled';

import { SliderSlick } from 'Components/Module/SlickSlider'
import { MoviePoster } from 'Route/Main';
import { _PlainButton, _genreButton, _boxButton, _gradeButton } from 'Route/Styled';

class MoviePosterRow extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    console.log('handleClick');
    console.log(this);
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
                , dots: true
                // , variableWidth:true
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

const MainSlideBox = styled.div`
position:relative;
`

class MovieHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderIndex: 0,
      sliderLink: null,
      slideList: [],
      movieList: []
    }
  }

  componentDidMount() {
    const getMainSlide = () => axios.get(`http://localhost:5000/movie/main/slide`);
    
    const getMovieList1 = () => axios.get(`http://localhost:5000/movie?sort_by=download_count`);
    const getMovieList2 = () => axios.get(`http://localhost:5000/movie?sort_by=like_count`);
    const getMovieList3 = () => axios.get(`http://localhost:5000/movie?sort_by=rating'`);
    const getMovieList4 = () => axios.get(`http://localhost:5000/movie?genre=family`);

    const main = this;
    axios.all([getMainSlide(), getMovieList1(), getMovieList2(), getMovieList3(), getMovieList4()])
      .then(axios.spread(function (mainSlideList, week, populal, rating, genre) {
        main.setState((prevState) => ({
          slideList: prevState.slideList.concat(mainSlideList.data.data.movies)
        }))
        main.setState((prevState, prevProps) => ({
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
            }])
        }));

      }));
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
            , dots: true
            , infinite: true
            , fade: true,
            responsive:false
          }} />
        </MainSlideBox>
      
        <div className="movie__home_control">{this.state.movieList ? movieList : 'Loading...'}</div>
      </div>
    );

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