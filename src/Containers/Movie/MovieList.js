import React, { Component } from 'react';
import MovieMenu from './MovieMenu';
import { Row, Col } from 'antd';
import { Route } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledComponent = {
  List: styled.div`
  
.movie__box_row:after{
  content: '';
  display: block;
  clear: both;
}
.movie__box{
  float: left;
  width: 200px;
}
.posterImage{
  width: 100%;
  height: 280px;
}
.movie__post_title{
  color: #fff;
  margin-top: 15px;
  font-weight: bold;
  margin-bottom: 20px;
  transition: .3s;
}
.movie__post_title:hover{
  color: #ff501a;
 
}
.movie__post_sub_tx{
  color: hsla(0,0%,100%,.5);
  justify-content: space-between;
  font-size: 11px;
}
.movie__box_row{
  border-bottom: 1px solid rgba(211,215,219,.1);
  padding-bottom: 2rem;
}
  `
}
const MovieImg = (props) => {
  return (
    <div className="movie__box">
      <img className="posterImage" src={props.info.poster} alt="test" />
      <div className="movie__post_title">{props.info.title}</div>
      <div className="movie__post_sub_tx">{props.info.subTitle}</div>
    </div>
  )
}

class MovieList extends Component {
  render() {
    const movieInfo = [
      {
        id: 0,
        poster: "http://image.chosun.com/sitedata/image/201906/19/2019061900603_0.jpg",
        title: "Gir From Nowhere",
        subTitle: "(2017) - 1hr 25min"
      },
      {
        id: 1,
        poster: "https://movie-phinf.pstatic.net/20190717_63/1563326824629FBVvi_JPEG/movie_image.jpg?type=m665_443_2",
        title: "Gir From Nowhere",
        subTitle: "(2017) - 1hr 25min"
      },
      {
        id: 2,
        poster: "https://sm.ign.com/ign_kr/screenshot/default/special-poster-01_7vyf.jpg",
        title: "Gir From Nowhere",
        subTitle: "(2017) - 1hr 25min"
      },
      {
        id: 3,
        poster: "https://movie-phinf.pstatic.net/20190726_177/15641046254730gK1F_JPEG/movie_image.jpg?type=m886_590_2",
        title: "Gir From Nowhere",
        subTitle: "(2017) - 1hr 25min"
      },
      {
        id: 4,
        poster: "https://movie-phinf.pstatic.net/20190821_179/1566364206702zsxW4_JPEG/movie_image.jpg?type=m665_443_2",
        title: "Gir From Nowhere",
        subTitle: "(2017) - 1hr 25min"
      },
      {
        id: 5,
        poster: "https://movie-phinf.pstatic.net/20190603_273/1559540193462sgsr5_JPEG/movie_image.jpg",
        title: "Gir From Nowhere",
        subTitle: "(2017) - 1hr 25min"
      }
    ];

    return (
      <StyledComponent.List >
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
      </StyledComponent.List>
    );
  }
}

export default MovieList;