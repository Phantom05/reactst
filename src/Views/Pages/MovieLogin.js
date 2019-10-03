import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { AuthWrapper } from 'CrossLoads/Main';

const Styled = {
  Login: styled.div`
  min-height:100vh;
  overflow:hidden;
  .login__input{
    margin-bottom:20px;
  }
  .login__social_link{
    display:inline-block;
    font-size:20px;
    margin-right:5px;
    padding:5px;
    color:#fff;
    &:last-child{
      margin-right:0;
    }
  }

  .login__btn{
    &:hover{
      color:orange;
      border:1px solid orange;
      background:#333;
    }
    &.left{
      margin-right:5px;
    }
  }
  .login__box{
    margin-top:20px;
    text-align:right;
  }
  .login__title{
    font-size:50px;
    font-weight:bold;
    color:#fff;
    margin-bottom:50px;
    text-align:center;
  }
  `};


class MovieLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount(){
    this.props.controlLayout('header');
    this.props.controlLayout('footer');
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSumbit = (e) => {
    console.log('handleSumbit');
    console.log(e.target);
  }

  render() {
    const state = this.state;
    return (
      <Styled.Login>
        <AuthWrapper title={<h1 className="login__title">Login</h1>}>
          <Input
            type="email"
            className="login__input"
            placeholder="email"
            onChange={this.handleChange}
            value={state.username}
            name="username"
            autoComplete="off"
          />
          <Input.Password
            placeholder="passowrd"
            onChange={this.handleChange}
            value={state.password}
            name="password"
          />
          <div className="login__box">
            <div className="login__social_box">
              <Link to="/github" className="login__social_link">
                <Icon type="github" />
              </Link>
              <Link to="/google" className="login__social_link">
                <Icon type="google" />
              </Link>
              <Link to="/facebook" className="login__social_link">
                <Icon type="facebook" />
              </Link>
            </div>
            <div className="login__local_box">
              <Button className="login__btn craete left" >Create</Button>
              <Button
                className="login__btn login"
                onClick={this.handleSumbit} 
              >Login</Button>
            </div>
          </div>
        </AuthWrapper>
      </Styled.Login>
    );
  }
}

export default MovieLogin;