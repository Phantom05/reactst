import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { jsx, css } from '@emotion/core';
import _ from 'lodash';

// style
import HeaderComponent from 'Style/Base/Header'


class SearchInput extends Component{
  constructor(props){
    super(props)
    this.state ={
      searchInput:'',
      placeholder:props.placeholder || ''
    }
  }
  handleChange = (e) => {
    console.log('change');
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleFocus = (e) =>{
    console.log('handleFocus');
    // this.onFocus()
    this.setState({
      placeholder:''
    })
  }

  handleBlur  = (e) =>{
    console.log('blur');
    
    if(!this.state.searchInput.trim()){
      this.setState({
        searchInput:'',
        placeholder:'Find movies, TV shows and more'
      })  
    }
  }
  render(){
    const [props,state] = [this.props,this.state];
    return (
    <input type="text" className="header__main_search_input" onChange={this.handleChange} name="searchInput" value={state.searchInput} onFocus={this.handleFocus} onBlur={this.handleBlur} placeholder={props.placeholder} />
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

    const [props,state] = [this.props,this.state];
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
      <HeaderComponent className={`MovieHeader ${trap && props.activeClass } `} >
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

        <span className={`support__header_info_box ${ trap && props.activeClass }`}>
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
        
        <SearchInput placeholder="Find movies, TV shows and more"/>

      </HeaderComponent>
    );
  }
}

export default Header;