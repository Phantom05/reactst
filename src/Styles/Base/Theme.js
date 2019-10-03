
import styled from '@emotion/styled';
// import { css } from '@emotion/core'
// import {  keyframes } from '@emotion/core'


// function StyleRender(styleFn , Component1){
//   const MainComponent = ({className}) => (<Component1 className={className} />);
//   return styleFn(MainComponent);
// };


// function convertFunction(Target){
//   const MainComponent = ({className}) => (<Target className={className} />);
//   return MainComponent;
// }

function TTest(Component1){
  // let convertFn = convertFunction(Component1)
  // return styled(convertFn)`
  // background:black;
  // `
}



function Theme (target){
  console.dir(target);
  return styled(target)`
    background:#26262d;
    color:#fff;
    min-height:100vh;
  `
}
export {
  Theme,
  TTest,
}