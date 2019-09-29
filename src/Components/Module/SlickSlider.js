import React, { Component } from 'react';
import styled from '@emotion/styled';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {MovieList} from './Movie';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class SliderSlick extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const props = this.props;
    const posterArr = Array(10).fill(true);
    const posterRow = posterArr.map((list, idx) => (
      <div>
        <div>{idx}</div>
        <img src="http://file.thisisgame.com/upload/tboard/user/2016/07/08/20160708061954_5657.jpg" alt="" />
      </div>
    ))


    return (
      <Slider {...settings} className={props.className}>
        {posterRow}
      </Slider>
    )
  }
};

const StyleSlickSlider = styled(SliderSlick)`
  background:white;
  height:150px;
  width:95%;
  margin:auto;
`;



class SlickSlider extends Component {
  render() {
    return (
      <div>
        <StyleSlickSlider />
      </div>
    );
  }
}

export default SlickSlider;