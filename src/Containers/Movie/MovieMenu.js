import React, { Component } from 'react';
// import './MovieMenu.css';
import { NavLink  } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledComponent = {
  Menu : styled.div`
  .MovieMenuBox{
    /* display: inline-block; */
    padding: 15px;
    border: 1px solid red;
    text-align: left;
  }
  .MovieMenuBox:after{
    content: '';
    display: block;
    clear: both;
  }
  .MovieMenuList{
    cursor: pointer;
    float: left;
    margin-right: 10px;
  }
  .MovieMenuList:hover{
   text-decoration: underline;
  }
  `
}
class MovieMenu extends Component {
   
  render() {
    const menuList=[
      {
        id:0,
        title:'All',
        link:'all'
      },
      {
        id:1,
        title:'Action',
        link:'action'
      },
      {
        id:2,
        title:'Horror',
        link:'horror'
      },
      {
        id:3,
        title:'Thriler',
        link:'thriler'
      },
      {
        id:4,
        title:'Comic',
        link:'comic'
      },

    ];
    const activeStyle = {
      fontWeight:`bold`
    }
    return (
      <StyledComponent.Menu>
        <ul className="MovieMenuBox">
          {menuList.map(list=>{
            return (
              <li key={list.id} className="MovieMenuList">
                <NavLink exact to={`${list.link}`} activeStyle={activeStyle} >{list.title}</NavLink>
              </li>
            )
          })}
        </ul>
      </StyledComponent.Menu>
    );
  }
}

export default MovieMenu;