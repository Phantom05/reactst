import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import './MovieHome.css';

import axios from 'axios';
import styled from '@emotion/styled';
import {  keyframes } from '@emotion/core'
import debounce from 'lodash/debounce';

import { SliderSlick } from 'Components/Module/SlickSlider'
import { MoviePoster } from 'Route/Main';
import {MainMovieListArr} from 'Route/Common';
// import { _PlainButton, _genreButton, _boxButton, _gradeButton } from 'Route/Styled';

// api
import {GetSlideData,getMovieListData}  from 'Api/Api';

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
const rowKeyframe = keyframes`
  0% {
    opacity:0
  }

  100% {
    opacity:1
  }
`;
const MoviePosterRowStyle = styled.div`
   /* animation: ${rowKeyframe} 1s ease forwards; */
`

class MoviePosterRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const props = this.props;
    return (
      <div className="movie__home_row">
        {/* <video>
        <source src="https://yts.tl/movie/the-life-of-jesus-1997" type="video/mp4" />

        </video> */}

        <div className="movie__home_row_title_box">
          <span className="movie__home_title_tx">{props.category}</span>
          <span className="movie__home_title_more_box">
            <Icon type="ellipsis" />
          </span>
        </div>
        <MoviePosterRowStyle>
          <SliderSlick config={{
            slidesToShow: 7
            , slidesToScroll: 7
            , infinite: true
          }}
            list={props.movies && props.movies.map((info, i) => (
              <MoviePoster
                link={`/movie/detail/${info.id}`}
                key={info.id}
                movieInfo={info}
                onClick={this.handleClick}
                onMouseOver={this.onDebounceHandle}
                // videoInfo 는 서버에 데이터를 추가할 예정입니다.
                videoInfo={i % 2 == 0
                  ? 'https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif'
                  : 'https://media.giphy.com/media/13gvXfEVlxQjDO/giphy.gif'}
              />)
            )} />
        </MoviePosterRowStyle>
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
      isLoading:false,
      scrollIdx:4
    }
    this.debouncedHandleScroll = debounce(this.testDebounceScroll, 300)
  }

  componentWillUnmount() {
    // 언마운트 될때에, 스크롤링 이벤트 제거
    window.removeEventListener("scroll", this.handleScroll);
  }

   componentDidMount() {

    const main = this;
    // ['/main/slide',
    // '?sort_by=download_count',
    // '?sort_by=like_count',
    // '?sort_by=rating',
    // '?genre=family',]

    GetSlideData()
    .then(axios.spread(function (mainSlideList, week, populal, rating, genre) {
      main.setState((prevState) => ({
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
      window.addEventListener("scroll", this.debouncedHandleScroll);
  }

  componentDidUpdate(){
    console.log('update');
    // this.setState({
    //   isLoading:false
    // })
  }

  testDebounceScroll = () =>{
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
        if(MainMovieListArr.length > this.state.scrollIdx){
          if (!this.state.isLoading ) {
            let movieListInfo1 = MainMovieListArr[main.state.scrollIdx];
            let movieListInfo2= MainMovieListArr[main.state.scrollIdx+1];
            getMovieListData(movieListInfo1.query)
            axios.all([getMovieListData(movieListInfo1.query),getMovieListData(movieListInfo2.query)])
            .then((response) =>{
              this.setState((prevState, prevProps) => ({
                isLoading:false,
                movieList: prevState.movieList.concat(
                  [{
                    category: movieListInfo1.title,
                    movies: response[0].data.data.movies
                  },
                  {
                    category: movieListInfo2.title,
                    movies: response[1].data.data.movies
                  }]),
                scrollIdx:prevState.scrollIdx +2,
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
        <div className="custom_slide__summary">{list.summary}</div>
        <div style={list.style} className="custom_slide"></div>
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

