import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {Icon} from 'antd';


const Poster = styled.div`
.movie__poster_box_control:after {
  content: '';
  display: block;
  clear: both;
}

.movie__poster_box {
  display: block;
  /* width: 280px; */
  float: left;
  padding: 8px;
  transition: .3s;
  cursor: pointer;
}

.movie__poster_img {
  width: 100%;
  /* height: 385px; */
}

.movie__poster_img_box{
  position:relative;
  overflow:hidden;
}

.movie__play_btn{ 
  position:absolute;
  display:inline-block;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%) scale(0.8);
  border-radius:100%;
  color:#fff;
  font-size:60px;
  transition:.3s;
  &:hover{
    color:#ff501a;
    transform:translate(-50%,-50%) scale(0.9);
  }
}
.movie__poster_img_dim{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,.5);
  transition:.3s;
  opacity:0;
  z-index:10;
}
.movie__poster_box:hover {
  box-shadow: 4px 5px 8px rgba(0, 0, 0, .5);
  transform: scale(1.005);
  .movie__poster_img_dim{
    opacity:1;
  }
  .movie__play_btn{
    transform:translate(-50%,-50%) scale(1.1);
  }
  .movie__poster_img_sumnail{
    /* opacity:1; */
    bottom:0;
  }
}

.movie__poster_box:hover .movie__poster_info_tx {
  /* color: #ff501a; */
}
.movie__poster_img_sumnail{
  position:absolute;
  width:100%;
  left:0;
  bottom:-40px;
  height: 40px;
  background:rgba(0,0,0,.5);
  color:#fff;
  transition:.3s;
  text-align:center;
  font-size:12px;
  line-height:40px;

}
.movie__poster_img_sumnail_tx{
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  color:#fff;
  z-index:50;
  &:hover{
    color:#ff501a;
  }
}

.movie__poster_info_tx {
  display: block;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
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
@media screen and (max-width:800px){
  .movie__poster_info_sub_tx{
    display:none;
  }
  .movie__poster_info_tx{
    font-size:14px;

  }
  .movie__poster_img_sumnail{
    display:none;
  }
}
`;


class MoviePoster extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const props = this.props;
    const { synopsis, year, title, medium_cover_image } = props.movieInfo;
    return (
      <Link to={props.link}>
        <Poster >
          <div className="movie__poster_box" onClick={props.onClick}>
            <div className="movie__poster_img_box">
              <div className="movie__poster_img_dim">
                <span className="movie__play_btn">
                  <Icon type="play-circle" theme="filled" />
                </span>
              </div>
              <img className="movie__poster_img" src={`https://yts.tl/${medium_cover_image}`} alt="" />
              <div className="movie__poster_img_sumnail">
                <span className="movie__poster_img_sumnail_tx">Add to Queue</span>
              </div>
            </div>
            <div className="movie__poster_info_box">
              <div>
                <div className="movie__poster_info_tx" >{title}</div>
                <div className="movie__poster_info_sub_tx">({year}) {synopsis}</div>
              </div>
            </div>
          </div>
        </Poster>
      </Link>
    )
  }
}

export default MoviePoster;