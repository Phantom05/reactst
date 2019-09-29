import React, { Component } from 'react';
import { Carousel, Icon } from 'antd';
import './MovieHome.css';

import axios from 'axios';
import styled from '@emotion/styled';
import SlickSlider from 'Components/Module/SlickSlider';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class MoviePoster extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = (e) => {
    console.log('click');
  }
  render() {
    const props = this.props;
    const { synopsis, year, title, medium_cover_image } = props.movieInfo;

    return (
      <div className="movie__poster_box" onClick={this.handleClick}>
        <div className="movie__poster_img_box">
          <img className="movie__poster_img" src={`https://yts.tl/${medium_cover_image}`} alt="" />
        </div>
        <div className="movie__poster_info_box">
          <div>
            <a className="movie__poster_info_tx">{title}</a>
            <div className="movie__poster_info_sub_tx">({year}) {synopsis}</div>
          </div>
        </div>
      </div>
    )
  }
}



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
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      // lazyLoad: true,
      variableWidth: true,
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
    const props = this.props;
    const posterRow = props.list.map((list, idx) => (
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
  render() {
    const count = Array(6).fill({})
    const props = this.props;
    // console.log(props, 'props');
    return (
      <div className="movie__home_row">
        {/* <TestButton onClick={this.hello} /> */}
        <div className="movie__home_row_title_box">
          <span className="movie__home_title_tx">{props.category}</span>
          <span className="movie__home_title_more_box">
            <Icon type="ellipsis" />
          </span>
        </div>


        <div className="movie__poster_box_control">
          <SliderSlick list={props.movies && props.movies.map((info, i) => {
            return <MoviePoster key={info.id} movieInfo={info} />
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
    const arr = [
      {
        id: 0,
        style: {
          backgroundImage: `linear-gradient(rgba(38, 38, 45, 0), rgb(38, 38, 45)), url(http://images.adrise.tv/9FUmvLnHDwq15BAdwGS7MWlOpLY=/0x94:2037x850/1920x676/smart/img.adrise.tv/9086aff4-8fd0-4535-a361-1e212b6998bb.jpg)`,
          backgroundPosition: `center`
        },
        link: `www.naver.com/1`
      },
      {
        id: 1,
        style: {
          backgroundImage: `linear-gradient(rgba(38, 38, 45, 0), rgb(38, 38, 45)), url("//images.adrise.tv/_tS5UL-kYfkHHk3JiLdx75_1vco=/0x203:3510x1506/1920x676/smart/img.adrise.tv/b13caf4a-2acc-43cb-9f52-8a9e5336c607.jpg")`,
          backgroundPosition: `center`,
        },
        link: `www.naver.com/2`
      },
      {
        id: 2,
        style: {
          backgroundImage: `linear-gradient(rgba(38, 38, 45, 0), rgb(38, 38, 45)), url("//images02.adrise.tv/tvSrRPWTtjMApXtfkbTCesAOtdM=/0x620:2000x1361/1920x676/smart/img.adrise.tv/49182b8f-c258-4a6c-8252-20991fffda21.jpg")`,
          backgroundPosition: `center`,
        },
        link: `www.naver.com/3`
      },
      {
        id: 3,
        style: {
          backgroundImage: `linear-gradient(rgba(38, 38, 45, 0), rgb(38, 38, 45)), url("//images02.adrise.tv/paqvJjkY5MP1i88VaNNjTreP4NA=/1920x676/smart/img.adrise.tv/0a60ab2f-e19a-4b11-89ae-73132685b343.jpg")`,
          backgroundPosition: `center`,
        },
        link: `www.naver.com/4`
      }
    ];
    this.setState({
      slideList: arr
    })

    // https://yts.tl/
    // 3번만 먼저 때리자
    // random   sort_by=like_count
    // popular sort_by=like_count
    // 별점순 = sort_by=rating
    // api/movie/family/1

    const test1 = () => axios.get(`http://localhost:5000/movie`);
    const test2 = () => axios.get(`http://localhost:5000/movie?sort_by=like_count`);
    const test3 = () => axios.get(`http://localhost:5000/movie?sort_by=rating'`);
    const test4 = () => axios.get(`http://localhost:5000/movie?genre=family`);

    const main = this;
    axios.all([test1(), test2(), test3(), test4()])
      .then(axios.spread(function (week, populal, rating, genre) {

        console.log(genre, 'genre');

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


    // this.state.movieList

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
        <Carousel className="catousel__box" autoplay effect="fade" afterChange={(index) => {
          this.changeSliderIndex(index)
        }}>
          {slideList}
        </Carousel>

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