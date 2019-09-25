import React, { Component } from 'react';
import { Carousel, Icon } from 'antd';
import './MovieHome.css';
import Slider from "react-slick";
// import axios from 'axios';



class MoviePoster extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="movie__poster_box">
        <div className="movie__poster_img_box">
          <img className="movie__poster_img" src="http://imgmovie.naver.com/mdi/mi/0537/53741_P00_153933.jpg" alt="" />
        </div>

        <div className="movie__poster_info_box">
          <div>
            <a className="movie__poster_info_tx">Blue My Mind</a>
            <div className="movie__poster_info_sub_tx">(2017)·1 hr 37 minDrama, Horror, Fantasy</div>
          </div>

        </div>
      </div>
    )
  }
}

class MoviePosterRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie__home_row">
        <div className="movie__home_row_title_box">
          <span className="movie__home_title_tx">{this.props.title}</span>
          <span className="movie__home_title_more_box">
            <Icon type="ellipsis" />
          </span>
        </div>

        <div className="movie__poster_box_control">
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
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
      slideList: []
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

    // axios.get(`https://picsum.photos/list`)
    // .then((response)=>{
    //   console.log(response);
    // })
    fetch(`https://picsum.photos/list`)
    .then((response)=>{
      console.log(response);
    })

    console.log(document.documentElement);
  }


  changeSliderIndex = (index) => {
    this.setState({
      sliderLink: this.state.slideList[index].link
    });

    

  }
  render() {
    return (
      <div className="">
        <Carousel className="catousel__box" autoplay effect="fade" afterChange={(index) => {
          this.changeSliderIndex(index)
        }}>
          {this.state.slideList.map((list, i) => {
            return (
              <div key={i} >
                <h3 style={list.style} className="custom_slide"></h3>
              </div>
            )
          })}
        </Carousel>
        <div className="movie__home_control">
          <MoviePosterRow title="Weekly Watchlist" />
          <MoviePosterRow title="Most Popular" />
          <MoviePosterRow title="Family Movies" />
          <MoviePosterRow title="Horror" />
          <MoviePosterRow title="Comedy" />
          <MoviePosterRow title="Documentary" />
          <MoviePosterRow title="Romance" />
          <MoviePosterRow title="Stand Up Comedy" />
          <MoviePosterRow title="Sci-fi - Fantasy" />
          <MoviePosterRow title="Foreign Language Films" />
          <MoviePosterRow title="Faith" />
          <MoviePosterRow title="Cult Classics" />
          <MoviePosterRow title="Thrillers" />
          <MoviePosterRow title="Sports Movies - Shows" />
          <MoviePosterRow title="Drama" />
        </div>
      </div>
    );
  }
}

export default MovieHome;