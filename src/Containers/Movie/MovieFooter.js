import React, { Component } from 'react';
// import {DatePicker, message, Row,Col,Icon} from 'antd';
// import './MovieFooter.css'
import styled from '@emotion/styled';

let StyleComponent ={
  Footer: styled.footer`
  position: relative;
  min-height: 200px;
  background: #202026;
  padding-bottom: 60px;
  padding-top: 80px;
  padding: 0 65px;
  .testColor {
  background: #e2e2e2
}
.rightBotton {
  position: relative;
  width: 100%;
  bottom: 0;
  text-align: center;
  color: #666;
  font-size: 13px;
  padding: 60px 0 40px 0;
}

.footer__nav_control {
  padding: 30px 0;
  border-top: 1px solid #424242;
  border-bottom: 1px solid #424242;
}

.footer__nav_control:after {
  content: '';
  display: block;
  clear: both;
}

.footer__nav_box {
  width: 200px;
  float: left;
  /* border: 1px solid red; */
}

.footer__nav_title {
  margin-bottom: 1.5rem;
  color: #707c86;
  font-weight: bold;
  font-size: 12px;
}

.footer__nav_link {
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
}

.footer__nav_main_title {
  padding: 20px 0;
  padding-top: 30px;
}

.footer__nav_main_title_tx {
  color: #fff;
  font-size: 27px;
}
`
};

class FooterNav extends Component{
  render(){
    return(
      <div className="footer__nav_box">
        <div className="footer__nav_title">COMPANY</div>
        <div className="footer__nav_link">Careers</div>
        <div className="footer__nav_link">News</div>
        <div className="footer__nav_link">Press Inquires</div>
      </div>
    )
  }
}
class MovieFooter extends Component {
  render() {
    return (
      <StyleComponent.Footer>
      {/* <header className="MovieFooter"> */}
        <div className="footer__nav_main_title">
          <div className="footer__nav_main_title_tx">Free Movie</div>
        </div>
        <div className="footer__nav_control">
          <FooterNav />
          <FooterNav />
          <FooterNav />
          <FooterNav />
          <FooterNav />
        </div>
        
        {/* <Icon type="up-circle" /> */}
        
        <div className="rightBotton">
          Copyright © PhantomMovie All rights reserved.
        </div>
      {/* </header> */}
      </StyleComponent.Footer>
    );
  }
}

export default MovieFooter;