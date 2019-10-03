import React, { Component } from 'react';
import { EventList } from 'Components/Base/EventList';
import _ from 'lodash';

console.log();




const OriginInput = (props) => {
  console.log(props);

  return <input
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}


    name={props.name}
    type={props.type}
    value={props.value}
    className={props.className}
    placeholder={props.placeholder}
  />
}

const Input = (props) => {
  const _EventList = _.reduce(props, (obj, val, key) => {
    if (_.includes(EventList, key)) obj[key] = val
    return obj
  }, {})

  console.log(_EventList);

  return <OriginInput {...props} />
  // return <OriginInput {..._EventList} {...props}/>
}




export {
  Input,
}