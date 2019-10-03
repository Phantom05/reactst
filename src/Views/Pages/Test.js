import React, { Component } from 'react';
// import styled from '@emotion/styled';
import {s_Theme} from 'Styles/Styled';
// import Button from 'Components/parts/Button';

class Testing extends Component{
  render(){
    return(
      <div className={this.props.className}>
        Hello world
      </div>
    )
  }
}




const MainComponent = ({className}) => (<Testing className={className}/>)
let MainComponentStyle = s_Theme(MainComponent);
class Test extends Component {
  render() {
    return (
      <MainComponentStyle />
    );
  }
}

export default Test;