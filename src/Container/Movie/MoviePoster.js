import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


const poster = styled.div`

.movie__poster_box_control:after {
  content: '';
  display: block;
  clear: both;
}

.movie__poster_img_box {}

.movie__poster_img {
  width: 100%;
  height: 285px;
  ;
}

.movie__poster_box {
  display: block;
  width: 210px;
  float: left;
  padding: 8px;
  /* border: 1px solid red; */
  transition: .5s;
  cursor: pointer;
}

.movie__poster_box:hover {
  box-shadow: 4px 5px 8px rgba(0, 0, 0, .5);
  transform: scale(1.005);
}

.movie__poster_box:hover .movie__poster_info_tx {
  color: #ff501a;
}

.movie__poster_info_box {}

.movie__poster_info_tx {
  display: block;
  font-weight: bold;
  color: #fff;
  font-size: 15px;
  padding: 15px 0;
  padding-bottom: 20px;
  cursor: pointer;
}

.movie__poster_info_tx:hover {
  color: #ff501a;
}

.movie__poster_info_sub_tx {
  color: hsla(0, 0%, 100%, .5);
  font-size: 11px;
  font-weight: bold;
  height: 50px;
  overflow: hidden;
}
`;


class MoviePoster extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const props = this.props;
    const { synopsis, year, title, medium_cover_image} = props.movieInfo;

    return (
      <div className="movie__poster_box" onClick={props.onClick}>
        <div className="movie__poster_img_box">
          <img className="movie__poster_img" src={`https://yts.tl/${medium_cover_image}`} alt="" />
        </div>
        <div className="movie__poster_info_box">
          <div>
            <Link  to={props.href} className="movie__poster_info_tx" >{title}</Link>
            <div className="movie__poster_info_sub_tx">({year}) {synopsis}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoviePoster;