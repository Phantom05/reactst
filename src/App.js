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

  // 돔들이 레디가 다되고 클래스들이 root안으로 들어갔으떄
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(), 1000);
  }
  componentWillUnmount(){
    // 언마운트됬을때, DOM에서 삭제됬을때 종료.
    // event는 이렇게 언마운트 처리를 다 해줘야함. 하나의 앱에서 돌아가기 때문에.
    clearInterval(this.timerID)
  }
  tick(){
    this.setState({
      date:new Date()
    })
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




class Toggle extends React.Component{
  constructor(props){
    super(props)
    this.state = {isToggleOn:true};
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick=(e) =>{
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  deleteRow=(bb)=>{
    console.log(bb);
  }
  render(){
    return(
      <div>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn? "On":"OFF"}
      </button>
         <button onClick={this.deleteRow('g')}>Delete Row</button>
      </div>
    )
  }
}

function UserGreeting(props){
  return <h1>Welcome back!</h1>
}
function GuestGreeting(props){
  return <h1>Please sign up</h1>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />;
  }
  return <GuestGreeting />
}

function LoginButton(props){
  return (
    <button onClick={props.onClick}>Login</button>
  );
}
function LogoutButton(props){
  return (
    <button onClick={props.onClick} >
      Logout
    </button>
  )
}

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state ={isLoggedIn:false}
  }

  handleLoginClick(){
    this.setState({isLoggedIn:true})
  }

  handleLogoutClick(){
    this.setState({isLoggedIn:false})
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if(isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    }else{
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return(
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

function Mailbox(props){
  const unreadMessage = props.unreadMessage;
  return(
    <div>
      <h1>Hello!</h1>
      {unreadMessage.length >0 &&
      <h2>
        You has {unreadMessage.length} unread messages.
      </h2>}
    </div>
  )
}

function WarningBanner(props){
  if(!props.warn){
    return null;
  }
}
const messages = ['React','Re: React','Re:Re: React']
function App() {
  return (
    <div className="App">
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <Clock />
      <Toggle />
      {/* <button onClick={handleClick}>Activate Lasers</button> */}
      {/* <a href="#" onClick={handleClick}>Click me</a> */}
    <Greeting isLoggedIn={true} />
     <LoginControl />
      <Mailbox unreadMessage={messages} />
    </div>
  );
}

export default App;
