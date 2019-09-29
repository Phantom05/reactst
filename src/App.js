import React from 'react';
import './Components/Reset.css';
// import logo from './logo.svg';
import './App.css';
// import StateTestMain from './Components/StateTestMain';
// import axios from 'axios';
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'

import { BrowserRouter, withRouter } from 'react-router-dom';
import { MovieIndex, DramaHome } from './Route/Main';



const MovieComponent = withRouter(props => <MovieIndex {...props} />);


class Parent extends React.Component {
  state = {
    name: "John Doe"
  }

  updateName = (name) => {
    this.setState({ name })
  };

  render() {
    return (
      <div>
        <lable>Your Name</lable>
        <Input value={this.state.name} updateName={this.updateName} />
      </div>
    )
  }
}

class Input extends React.Component {
  handleUpdate = (e) => {
    this.props.updateName(e.target.value)
  }

  render() {
    return <input value={this.props.value} onChange={this.handleUpdate} />
  }
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Parent /> */}
        <MovieComponent />
        {/* <DramaHome /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

