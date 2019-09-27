import React, { Component } from 'react';
// import {DatePicker, message, Row,Col,Icon} from 'antd';
import './MovieFooter.css'


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
      <header className="MovieFooter">
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
      </header>
    );
  }
}

export default MovieFooter;