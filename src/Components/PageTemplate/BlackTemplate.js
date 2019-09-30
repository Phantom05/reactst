import React from 'react';
import { Wapper } from 'Styles/Response/Response';

const BlackTemplate = ({ children, header,size }) => {
  return (
    <Wapper size={size} >
      {header}
      <main>{children}</main>
    </Wapper>
  )
}
export default BlackTemplate;