import React, { Component } from 'react';
import MovieMenu from './MovieMenu';
import { DatePicker, message, Row, Col, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import './Movie.css';


const MovieImg = (props) => {
return(
  <div className="movie__box">
    <img className="posterImage" src={props.info.poster} />
    <div className="movie__post_title">{props.info.title}</div>
    <div className="movie__post_sub_tx">{props.info.subTitle}</div>
  </div>
)
}


class Movie extends Component {
  render() {
    const movieInfo = [
      {
        id: 0,
        poster: "http://image.chosun.com/sitedata/image/201906/19/2019061900603_0.jpg",
        title:"Gir From Nowhere",
        subTitle:"(2017) - 1hr 25min"
      },
      {
        id: 1,
        poster: "https://movie-phinf.pstatic.net/20190717_63/1563326824629FBVvi_JPEG/movie_image.jpg?type=m665_443_2",
        title:"Gir From Nowhere",
        subTitle:"(2017) - 1hr 25min"
      },
      {
        id: 2,
        poster: "https://sm.ign.com/ign_kr/screenshot/default/special-poster-01_7vyf.jpg",
        title:"Gir From Nowhere",
        subTitle:"(2017) - 1hr 25min"
      },
      {
        id: 3,
        poster: "https://movie-phinf.pstatic.net/20190726_177/15641046254730gK1F_JPEG/movie_image.jpg?type=m886_590_2",
        title:"Gir From Nowhere",
        subTitle:"(2017) - 1hr 25min"
      },
      {
        id: 4,
        poster: "https://movie-phinf.pstatic.net/20190821_179/1566364206702zsxW4_JPEG/movie_image.jpg?type=m665_443_2",
        title:"Gir From Nowhere",
        subTitle:"(2017) - 1hr 25min"
      },
      {
        id: 5,
        poster: "https://movie-phinf.pstatic.net/20190603_273/1559540193462sgsr5_JPEG/movie_image.jpg",
        title:"Gir From Nowhere",
        subTitle:"(2017) - 1hr 25min"
      }
    ];

    return (
      <div>
        <Row>
          <Col span={24}>
            <Route path="/movie/:category" component={MovieMenu} />
          </Col>
          <Col span={24}>

            <div className="movie__box_row">
              {movieInfo.map(list => {
                return (
                  <MovieImg key={list.id} info={list} />
                )
              })}
            </div>


          </Col>

        </Row>
      </div>
    );
  }
}

export default Movie;