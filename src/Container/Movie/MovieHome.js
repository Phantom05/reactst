import React, { Component } from 'react';
import { Carousel, Icon } from 'antd';
import './MovieHome.css';
// import Slider from "react-slick";
// import axios from 'axios';
// import {MovieList} from './Movie';

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
    const count = Array(6).fill({})

    return (
      <div className="movie__home_row">
        <div className="movie__home_row_title_box">
          <span className="movie__home_title_tx">{this.props.title}</span>
          <span className="movie__home_title_more_box">
            <Icon type="ellipsis" />
          </span>
        </div>

        <div className="movie__poster_box_control">
          {count.map((list,i)=>{
            return <MoviePoster key={i} /> 
          })}
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
    // fetch(`https://picsum.photos/list`)
    // .then((response)=>{
    //   console.log(response);
    // })
    // fetch(`https://api.unsplash.com/phtos`)
    // .then((response)=>{
    //   console.log(response);
    // })

    

    console.log(document.documentElement);
  }


  changeSliderIndex = (index) => {
    this.setState({
      sliderLink: this.state.slideList[index].link
    });

    

  }
  render() {
    let mainTitleArr = [
      "Weekly Watchlist"
      ,"Most Popular"
      ,"Family Movies"
      ,"Horror"
      ,"Comedy"
      ,"Documentary"
      ,"Romance"
      ,"Stand Up Comedy"
      ,"Sci-fi - Fantasy"
      ,"Foreign Language Films"
      ,"Faith"
      ,"Cult Classics"
      ,"Thrillers"
      ,"Sports Movies - Shows"
      ,"Drama"
    ]
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
          {mainTitleArr.map((list, i) =>{
            return <MoviePosterRow key={i} title={list} />
          })}
        </div>
      </div>
    );
  }
}

export default MovieHome;