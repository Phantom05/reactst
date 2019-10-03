import React, {Component} from 'react';
import styled from '@emotion/styled'
import { Wapper } from 'Styles/Response/Response';


const Template = ({className, children, header,size }) => {
  return (
    <Wapper size={size} className ={className}>
      {header}
      <main>{children}</main>

    </Wapper>
  )
}

const Main = styled.main`
${props => props.theme === 'black' && `
  background:#26262d;
  color:#fff;
`}
`


class PlainTemplate extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { children, header,size,theme } = this.props;
    return(
     <Wapper size={size} >
        {header}
      <Main theme={theme}>{children}</Main>
    </Wapper>
    )
  }
}


export default PlainTemplate;