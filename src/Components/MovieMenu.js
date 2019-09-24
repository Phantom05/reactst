import React, { Component } from 'react';
import './MovieMenu.css';
import { Route, Link,NavLink  } from 'react-router-dom';
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
      <div className="MovieMenu">
       
        <ul className="MovieMenuBox">
          {menuList.map(list=>{
            return (
              <li key={list.id} className="MovieMenuList">
                <NavLink exact to={`${list.link}`} activeStyle={activeStyle} >{list.title}</NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default MovieMenu;