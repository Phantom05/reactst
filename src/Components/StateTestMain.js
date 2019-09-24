import React from 'react';
import StateTestSub1 from './StateTestSub1';
import StateTestSub2 from './StateTestSub2';

class StateTestMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 2,
      second: 5,
      third: 10,
      main:''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  mainChange = (value) =>{
    this.setState({
      main:value
    })
  }

  render() {
    const state = this.state;
    return (
      <div>
        <div className="ControlBox">
          <div>
            <label className="viewLabel">Main</label>
            <input type="text" value={state.first} onChange={this.handleChange} name="first" />
          </div>
          <div>
            <label className="viewLabel">View SubTest1</label>
            <input type="text" value={state.second} onChange={this.handleChange} name="second" />
          </div>
          <div>
            <label className="viewLabel">View SubTest2</label>
            <input type="text" value={state.third} onChange={this.handleChange} name="third" />
          </div>
        </div>
        <StateTestSub1 name="View SubTest Main" multi={state.first} onHandleChange={this.mainChange} value={state.main}/>
        <StateTestSub2 name="View SubTest 1" value={state.main} multi={state.first} />
        <StateTestSub2 name="View SubTest 2" value={state.main} multi={state.second} />
        <StateTestSub2 name="View SubTest 3" value={state.main} multi={state.third} />
      </div>
    )
  }
}


export default StateTestMain;