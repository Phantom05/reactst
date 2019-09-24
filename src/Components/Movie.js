import React, { Component } from 'react';
import MovieMenu from './MovieMenu';
import { DatePicker, message, Row, Col, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import './Movie.css';


const MovieImg = (props) => {
  return (
    <img className="posterImage" src={props.info.poster} />
  )
}

class Movie extends Component {
  render() {
    const movieInfo = [
      {
        id: 0,
        poster: "http://image.chosun.com/sitedata/image/201906/19/2019061900603_0.jpg"
      },
      {
        id: 1,
        poster: "https://movie-phinf.pstatic.net/20190717_63/1563326824629FBVvi_JPEG/movie_image.jpg?type=m665_443_2"
      },
      {
        id: 2,
        poster: "https://sm.ign.com/ign_kr/screenshot/default/special-poster-01_7vyf.jpg"
      },
      {
        id: 3,
        poster: "https://movie-phinf.pstatic.net/20190726_177/15641046254730gK1F_JPEG/movie_image.jpg?type=m886_590_2"
      },
      {
        id: 4,
        poster: "https://movie-phinf.pstatic.net/20190821_179/1566364206702zsxW4_JPEG/movie_image.jpg?type=m665_443_2"
      },
      {
        id: 5,
        poster: "https://movie-phinf.pstatic.net/20190603_273/1559540193462sgsr5_JPEG/movie_image.jpg"
      }
    ];

    


    return (
      <div>
        <Row>
          <Col span={24}>
            <Route path="/movie/:category" component={MovieMenu} />
          </Col>
          <Col span={24}>
            {movieInfo.map(list => {
              return (
                <MovieImg key={list.id} info={list} />
              )
            })}

          </Col>

        </Row>
      </div>
    );
  }
}

export default Movie;