import React from 'react';
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import cx from 'classnames';


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







// const Wapper = ({ children , header}) => (
//   <WrapperHeader>
//     <header>{header}</header>
//     <main>{children}</main>
//   </WrapperHeader>
// )



// const Responsive = styled.div`

// `


// const Responsive = ({ children, className, ...rest }) => {
//   return (
//     <div className={cx('common', 'responsive', className)} {...rest}>
//       { children }
//     </div>
//   );
// };

// const Wapper = styled.div`
//   background:${background};
//   @media (max-width:1400px){
//     width:100%;
//   }
// `;



// const Basic = ({ className , children}) => (
//   <div className={className}>Some Text
//     {children}
//   </div>
// );

// const Fancy = styled(Basic)`
//   color:hotpink;
// `;

// const ABC = styled.div`
//   background:white;
//   height:20px;
// `
  // return (
  //   <Fancy >
  //     <ABC >
  //       Hello
  //     </ABC>
  //   </Fancy>
  // )