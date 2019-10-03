// import React, { Component } from 'react';
import styled from '@emotion/styled';


/**
 * 
 * @param {*} component 
 */
const PlainButton = (component) => styled(component)`
display: inline-block;
background:black;
color:#fff;
text-align:center;
${props => props.color === 'white' && `
  background:white;
  color:black;
`};
`;

/**
 * 
 * @param {*} component 
 */
const genreButton = (component) => styled(component)`
display: inline-block;
background-color: hsla(0,0%,100%,.2);
color: #fff;
display: flex;
align-items: center;
padding: 5px 10px 2px;
line-height: 12px;
font-size: 11px;
white-space: nowrap;
border-radius: 20px;
padding: 5px 15px;
border:0;
cursor: pointer;
transition:.3s;
text-align:center;
&:hover{
  background-color: #424242;
}
`;

/**
 * 
 * @param {*} component 
 */
const boxButton = (component) => {
  return styled(component)`
  display: inline-block;
  position:relative;
  border: 1px solid #fff;
  height: 40px;
  font-size: 11px;
  cursor: pointer;
  text-align:center;
  padding-left:10px;
  padding-right:10px;
  transition:.3s;
  ${props => props.theme && props.theme === 'white' ? `
  color: #26262d;
  background-color: #fff;
  &:hover{
    color:#3d3d3d;
    background-color: #e2e2e2;
  }`:
  `color: #fff;
  background-color: #26262d;
  &:hover{
    color:#b4b4b4;
  }`};
  ${props => props.hover && `
  &:hover{
    ${props.hover}
  }
  `};
  ` 
};

/**
 * 
 * @param {*} component 
 */
const gradeButton = (component) => styled(component)`
  border-radius: 2px;
  background-color: hsla(0,0%,100%,.2);
  color: #fff;
  display: flex;
  align-items: center;
  padding: 5px 10px 2px;
  line-height: 12px;
  font-size: 11px;
  white-space: nowrap;
  border:0;
`;



export {
  PlainButton,
  genreButton,
  boxButton,
  gradeButton,
}


