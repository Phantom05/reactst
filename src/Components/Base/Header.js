import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import _ from 'lodash';
import { Icon } from 'antd';
import SearchInput from "Components/Common/Form/SearchInput";

// style
import { HeaderComponent } from 'Style/Base/Header'


const MainSearchInput = styled(SearchInput)`
width:100%;
border: none;
height: 35px;
font-size: 11px;
outline: 0;
border-radius: 40px;
box-sizing: content-box;
box-shadow: none;
background: 0 0;
color: #fff;
text-align: center;
letter-spacing: .5px;
transition:  .2s ease-in-out,font-size .2s ease-in-out .1s;
background: hsla(0,0%,100%,.5);
padding-top: 2px;
&:hover{
  background: hsla(0,0%,100%,.3);
}
&::placeholder {
color: #fff;
transition:.3s ease-in-out .1s;;
}
&.on{
  background: hsla(0,0%,100%,.3);
  font-size: 13px;
}
${props => props.focusin && `  
  background: hsla(0,0%,100%,.3);
  font-size: 13px;`};
`;


const SearchFormStyled = styled.form`
  position:absolute;
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  top:20px;
  width:450px;
`;
const SearchIcon = ({ className }) => (<Icon type="search" className={className} />);
const SearchFormIcon = styled(SearchIcon)`
  position:absolute;
  left:15px;
  top:50%;
  transform:translateY(-50%);
  z-index:5;
  color:white;
  font-size:20px;
`;
class SearchForm extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    console.log('form handleChange ');

  }
  render() {
    const [props, state] = [this.props, this.state]
    return (
      <SearchFormStyled action={props.action} method={props.method} onChange={this.handleChange}>
        <SearchFormIcon />
        <MainSearchInput name="hello" placeholder="Find movies, TV shows and more" autoComplete="off" />
      </SearchFormStyled>
    )
  }
}

class Header extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    console.log('did');
  }

  componentDidUpdate() {
    console.log('update');
  }

  render() {

    let menuList = [
      {
        id: 0,
        title: `Home`,
        link: '/',
      },
      {
        id: 2,
        title: `Movie`,
        link: '/movie/all',
      }, {
        id: 1,
        title: `About`,
        link: '/about',
      },
      {
        id: 3,
        title: `Board`,
        link: '/board',
      },
      {
        id: 4,
        title: `Login`,
        link: '/login',
      },
    ];

    const [props, state] = [this.props, this.state];
    const activeStyle = { fontWeight: `bold` }
    const url = props.url;

    const NavList = menuList.map((list, i) => {
      return (
        <li key={list.id} className="header__Box_List">
          <NavLink exact to={list.link} activeStyle={activeStyle}>{list.title}</NavLink >
        </li>
      )
    });

    let trap = _.flatten([props.trapUrl]).indexOf(url) !== -1
    return (
      <HeaderComponent className={`MovieHeader ${trap && props.activeClass} `} >
        <div className=""></div>
        <span className="header__main_Logo">
          <NavLink exact to="/">
            <img src="https://static.apiary.io/assets/1lqsC4I4.png" />
          </NavLink >

        </span>
        <span className="header__main_Logo_Title_Box">
          <div className="header__main_Logo_Title">Free Movie</div>
          <div className="header__main_Logo_Sub_Title">Enjoy Time •</div>
        </span>

        <span className={`support__header_info_box ${trap && props.activeClass}`}>
          <div className="support__header_info_in_box">
            <div className="header__main_Logo_Title">Sponsorship helps you run your site.</div>
            <div className="header__main_Logo_Sub_Title">
              <span>
                <a className="support__header_info_address" href="https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" >address : </a>
              </span>
              <span className="">
                0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
              </span>
            </div>
          </div>
        </span>

        {/* Route는 깜빡이며 이동, Link는 바로이동 */}
        <ul className="headerBox">
          {NavList}
        </ul>
        <SearchForm action="/" method="get" />
      </HeaderComponent>
    );
  }
}

export default Header;