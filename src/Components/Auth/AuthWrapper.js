import React, { Component } from 'react';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';

const AuthTemplate = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border:1px solid #333;
  border-radius:5px;
  box-shadow:5px 5px 5px rgba(0,0,0,.5);
  /* background:#fff; */
  padding: 2rem;
`;
const Logo = styled(Link)`
  display:inline-block;
`;
const LogoWrapper = styled.div`
  margin-bottom:50px;
  text-align:center;
`;
const Contents = styled.div`
  padding: 2rem;
`

class AuthWrapper extends Component {
  render() {
    const {title,children} = this.props;
    return (
      <AuthTemplate>
        <LogoWrapper>
          <Logo to="/">{title}</Logo>
        </LogoWrapper>
        <Contents>
          {children}
        </Contents>
      </AuthTemplate>
    );
  }
}

export default AuthWrapper;