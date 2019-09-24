import React from 'react';

class StateTestSub3  extends React.Component{
  constructor(props){
    super(props);
    
  }

  render(){
    return(
      <div>
        <div>
          <label>StateTestSub2 only View</label>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>  
    )
  }
}

export default StateTestSub3;