import React from 'react';
import './MovieHeader.css';
import { Route, Link,NavLink  } from 'react-router-dom';


class MovieHeader extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    let menuList = [
      {
        id:0,
        title:`Home`,
        link:'/',
      },{
        id:1,
        title:`About`,
        link:'/about',
      },
      {
        id:2,
        title:`Movie`,
        link:'/movie/all',
      },
      {
        id:3,
        title:`Board`,
        link:'/board',
      },
      {
        id:4,
        title:`Login`,
        link:'/login',
      }];

      const activeStyle = {
        fontWeight:`bold`
      }
    return(
      <header className="MovieHeader">
        {/* Route는 깜빡이며 이동, Link는 바로이동 */}
        <ul className="headerBox">
          {menuList.map((list,i)=> {
            return (
            <li key={list.id} className="headerBoxList">
              <NavLink exact to={list.link} activeStyle={activeStyle}>{list.title}</NavLink >
            </li>
            )
          })}
        </ul>
      </header>
    )
  }
}

export default MovieHeader;