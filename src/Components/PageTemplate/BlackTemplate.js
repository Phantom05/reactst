import React, { Component } from 'react';
import { Wapper } from 'Style/Response/Response';

const BlackTemplate = ({ children, header,size }) => {
  return (
    <Wapper size={size} >
      {header}
      <main>{children}</main>
    </Wapper>
  )
}
export default BlackTemplate;