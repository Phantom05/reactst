import React from 'react';
import './MovieHeader.css';
import { NavLink  } from 'react-router-dom';

class MovieHeader extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log('did');
  }

  componentDidUpdate(){
    console.log('update');
  }

  handleChange=(e)=>{
    console.log('change');
  }

  render(){
    let menuList = [
       {
        id:2,
        title:`Movie`,
        link:'/movie/all',
      },{
        id:1,
        title:`About`,
        link:'/about',
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
      },
    ];

      const activeStyle = { fontWeight:`bold`}
      const url = this.props.url;

    return(
      // <header className={(url === '/movie/all' || url === '/') ? 'MovieHeader movie': 'MovieHeader'}>
      <header className={`MovieHeader ${(url === '/movie/all' || url === '/') ?"movie":""} `} >
        
        <div className=""></div>
         <span className="headermainLogo">
         <NavLink exact to="/">
         <img src="https://static.apiary.io/assets/1lqsC4I4.png" />
         </NavLink >
          
         </span>
         <span className="headermainLogoTitleBox">
            <div className="headermainLogoTitle">Free Movie</div>
            <div className="headermainLogoSubTitle">Enjoy Time •</div>
         </span>
         
         <span className={(this.props.url === '/movie/all') ? 'support__header_info_box movie': 'support__header_info_box'}>
          <div className="support__header_info_in_box">
            <div className="headermainLogoTitle">Sponsorship helps you run your site.</div>
            <div className="headermainLogoSubTitle">
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