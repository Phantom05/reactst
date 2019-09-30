import React, { Component } from 'react';
import { Carousel, Icon } from 'antd';
import './MovieHome.css';

import axios from 'axios';
import styled from '@emotion/styled';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {MoviePoster} from 'Route/Main';




function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} />
  );
};
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} />
  );
};
const SlickPrevArrow = styled(SamplePrevArrow)`
  display:inline-block;
  position:absolute;
  top:50%;
  width:40px;
  height:40px;
  transform:translateY(-50%);
  left:10px;
  border:1px solid blue;
  padding:10px;
  z-index:50;
`;
const SlickNextArrow = styled(SampleNextArrow)`
  display:inline-block;
  position:absolute;
  top:50%;
  width:40px;
  height:40px;
  transform:translateY(-50%);
  right:10px;
  border:1px solid red;
  padding:10px;
`;


class SliderSlick extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const props = this.props;
    let config = {
      speed : props.config && props.config.speed || 500,
      slidesToShow: props.config && props.config.slidesToShow || 6,
      slidesToScroll: props.config && props.config.slidesToScroll || 6,
      variableWidth: props.config && props.config.variableWidth || false,
      dots:props.config && props.config.dots || false,
      infinite :props.config && props.config.infinite || false
    }

    var settings = {
      dots: config.dots,
      infinite: config.infinite,
      speed: config.speed,
      slidesToShow: config.slidesToShow,
      slidesToScroll: config.slidesToScroll,
      initialSlide: 0,
      // lazyLoad: true,
      variableWidth: config.variableWidth,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current }),
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            variableWidth: true,
            initialSlide: 0,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            variableWidth: true,
            initialSlide: 0,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            variableWidth: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true,
          }
        }
      ],
      nextArrow: <SlickNextArrow />,
      prevArrow: <SlickPrevArrow />
    };

    const posterRow = props.list && props.list.map((list, idx) => (
      <div key={list.key}>
        {list}
      </div>
    ))

    return (
      <Slider {...settings} className={props.className}>
        {posterRow}
      </Slider>
    )
  }
};

class MoviePosterRow extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) =>{
    console.log('handleClick');
    console.log(this);
  }
  render() {
    const props = this.props;
    // console.log(props, 'props');
    return (
      <div className="movie__home_row">
        <div className="movie__home_row_title_box">
          <span className="movie__home_title_tx">{props.category}</span>
          <span className="movie__home_title_more_box">
            <Icon type="ellipsis" />
          </span>
        </div>
        <div className="movie__poster_box_control">
          <SliderSlick list={props.movies && props.movies.map((info, i) => {
            return <MoviePoster  key={info.id} movieInfo={info}  onClick={this.handleClick}/>
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
      movieList: []
    }
  }

  componentDidMount() {
    const getMainSlide = () => axios.get(`http://localhost:5000/movie/main/slide`);
    const getMovieList1 = () => axios.get(`http://localhost:5000/movie`);
    const getMovieList2 = () => axios.get(`http://localhost:5000/movie?sort_by=like_count`);
    const getMovieList3 = () => axios.get(`http://localhost:5000/movie?sort_by=rating'`);
    const getMovieList4 = () => axios.get(`http://localhost:5000/movie?genre=family`);

    const main = this;
    axios.all([getMainSlide(), getMovieList1(), getMovieList2(), getMovieList3(), getMovieList4()])
      .then(axios.spread(function (mainSlideList, week, populal, rating, genre) {
        main.setState((prevState)=>({
          slideList:prevState.slideList.concat(mainSlideList.data.data.movies)  
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
      return <MoviePosterRow key={i} category={list.category} movies={list.movies} />
    });

    const slideList = this.state.slideList.map((list, i) => (
      <div key={i} >
        <h3 style={list.style} className="custom_slide"></h3>
      </div>
    ));

    const Main = () => (
      <div>
        {console.log(this.state.slideList ,'ggg')}



      <SliderSlick list={slideList} config={{
        slidesToShow:1
        ,slidesToScroll:1
        ,dots:true
        ,dots:true
        ,infinite:true}}/>

        {/* <Carousel className="catousel__box" autoplay effect="fade" afterChange={(index) => {
          this.changeSliderIndex(index)
        }}>
          {slideList}
        </Carousel> */}

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
      <div className="">
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