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
  /* border:1px solid blue; */
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
  /* border:1px solid red; */
  padding:10px;
`;


class SliderSlick extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  render() {
    const props = this.props;

    let config = {
      speed          : (props.config && props.config.speed) || 500,
      slidesToShow   : (props.config && props.config.slidesToShow) || 6,
      slidesToScroll : (props.config && props.config.slidesToScroll) || 6,
      variableWidth  : (props.config && props.config.variableWidth) || false,
      dots           : (props.config && props.config.dots )|| false,
      infinite       : (props.config && props.config.infinite) || false,
      fade           : (props.config && props.config.fade) || false,
      responsive     : (props.config && props.config.responsive) || false,
      autoplay       : (props.config && props.config.autoplay) || false,
      autoplaySpeed  : (props.config && props.config.autoplaySpeed) || false,
      
    }
    
    let responsiveSetting = [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 840,
        settings: {
          dots:false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots:false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      }
    ]
    // console.log(config.fade);
    let settings = {
      dots           : config.dots,
      // fade           : config.fade,
      autoplay       : props.autoplay ,
      autoplaySpeed  : props.autoplaySpeed ,
      infinite       : config.infinite,
      speed          : config.speed,
      slidesToShow   : config.slidesToShow,
      slidesToScroll : config.slidesToScroll,
      initialSlide   : 0,
      // lazyLoad    : true,
      variableWidth  : config.variableWidth,
      beforeChange   : (current, next) => this.setState({ activeSlide: next }),
      afterChange    : current => this.setState({ activeSlide2: current }),
      responsive     : config.responsive && responsiveSetting,
      nextArrow      : <SlickNextArrow />,
      prevArrow      : <SlickPrevArrow />
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

export {
  SliderSlick
};