import React, { Component } from 'react';
import styled from '@emotion/styled';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {MovieList} from './Movie';


function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} />
  );
};
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} />
  );
};

const SlickPrevArrow = styled(SamplePrevArrow)`
  display:inline-block;
  position:absolute;
  top:50%;
  width:40px;
  height:40px;
  transform:translateY(-50%);
  left:10px;
  border:1px solid blue;
  padding:10px;
  z-index:50;
`;
const SlickNextArrow = styled(SampleNextArrow)`
  display:inline-block;
  position:absolute;
  top:50%;
  width:40px;
  height:40px;
  transform:translateY(-50%);
  right:10px;
  border:1px solid red;
  padding:10px;
`;


class SliderSlick extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const props = this.props;
    let config = {
      speed : props.config && props.config.speed || 500,
      slidesToShow: props.config && props.config.slidesToShow || 6,
      slidesToScroll: props.config && props.config.slidesToScroll || 6,
      variableWidth: props.config && props.config.variableWidth || false,
      dots:props.config && props.config.dots || false,
      infinite :props.config && props.config.infinite || false
    }

    var settings = {
      dots: config.dots,
      infinite: config.infinite,
      speed: config.speed,
      slidesToShow: config.slidesToShow,
      slidesToScroll: config.slidesToScroll,
      initialSlide: 0,
      // lazyLoad: true,
      variableWidth: config.variableWidth,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current }),
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            variableWidth: true,
            initialSlide: 0,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            variableWidth: true,
            initialSlide: 0,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            variableWidth: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true,
          }
        }
      ],
      nextArrow: <SlickNextArrow />,
      prevArrow: <SlickPrevArrow />
    };

    const posterRow = props.list && props.list.map((list, idx) => (
      <div key={list.key}>
        {list}
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

export {
  SliderSlick
};