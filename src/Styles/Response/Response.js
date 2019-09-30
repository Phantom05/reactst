// import React from 'react';
// import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
// import cx from 'classnames';


const MediaQurey = (width = 1400) =>`
  @media (max-width:${width}px){
    width:100%;
}`;

const ResponsiveSwitch =(size)=> {
  const widthObj = {
    xl:1400,
    lg:1200,
    md:800,
    sm:600,
    xs:320
  };
  return MediaQurey(widthObj[size])
}
const Wapper = styled.div`
  ${props => props.size && ResponsiveSwitch(props.size)}
`;





export{
  Wapper,
};




