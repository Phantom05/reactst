import React from 'react';

class StateTestSub1  extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:''}
  }

  handleChange = (e) =>{
    this.props.onHandleChange(e.target.value)
  }

  render(){
    const props = this.props;
    return(
      <div className="StateBox">
        <div>
          <label>{this.props.name}</label>
        </div>
        <div>
      <div>
      <label className="mainLabel">INPUT:</label>
          <input type="text" value={props.value} onChange={this.handleChange}/>
      </div>
        </div>
      </div>
    )
  }
}

export default StateTestSub1;