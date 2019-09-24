import React from 'react';

class StateTestSub2  extends React.Component{
  constructor(props){
    super(props);
    
  }

  render(){
    return(
      <div>
        <div>
          <label>{this.props.name}</label>
        </div>
        <div>
          <input type="text" value={this.props.value *this.props.multi} readOnly/>
        </div>
      </div>  
    )
  }
}

export default StateTestSub2;