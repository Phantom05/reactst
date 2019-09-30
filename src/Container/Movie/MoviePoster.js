import React, { Component } from 'react';
import styled from '@emotion/styled';

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
            <a  className="movie__poster_info_tx">{title}</a>
            <div className="movie__poster_info_sub_tx">({year}) {synopsis}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoviePoster;