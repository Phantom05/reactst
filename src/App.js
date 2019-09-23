import React from 'react';
import logo from './logo.svg';
import './App.css';


function Avatar(props){
  return (
    <img className="Avatar" 
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}

function UserInfo(props){
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

// function Comment(props){
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <UserInfo user={props.author} />
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     </div>
//   )
// }

function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}


// function Clock(props){
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()}
  }
  render(){
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <Clock />
    </div>
  );
}

export default App;
