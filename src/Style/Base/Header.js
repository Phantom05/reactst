import styled from '@emotion/styled';

const Header = styled.header`
position: fixed;
left: 0;
top: 0;
width: 100%;
z-index: 50000;
/* border-bottom: 1px solid #ececec; */
height: 80px;
background: #4c5264;
transition: 1s;
&.movie{
background: linear-gradient(rgba(0,0,0,.9) 1%,rgba(0,0,0,.8) 15%,rgba(0,0,0,.7) 30%,rgba(0,0,0,.6) 45%,rgba(0,0,0,.5) 60%,rgba(0,0,0,.3) 75%,transparent);
}

.headerBox{
position: absolute;
top: 50%;
left: 250px;
transform: translateY(-50%);
&:after{
  content: '';
display: block;
clear: both;
}
}

.header__Box_List{
float: left;
list-style: none;
margin-right: 20px;
cursor: pointer;
color: #fff;
& > a{
  color: #fff;
}
&:last-child{
float: right;
}
&:hover{
text-decoration: underline;
}
}


.header__main_Logo{
position: absolute;
top: 50%;
transform: translateY(-50%);
left: 25px;
padding-right: 25px;
border-right: 1px solid #585e6f;;
}
.header__main_Logo_Title_Box{
position: absolute;
top: 50%;
transform: translateY(-50%);
left: 125px;
padding-right: 30px;
border-right: 1px solid #585e6f;
}
.header__main_Logo_Title{
color: #fff;
font-weight: bold;
}
.header__main_Logo_Sub_Title{
color: #959cad;
}


.support__header_info_box{
position: absolute;
top: 50%;
transform: translateY(-50%);
right: 0;
height: 78px;
padding: 0 30px;
padding-right: 10px;
width: 455px;
transition: 1s;
&:hover{
background: #575e70;
}
&.movie:hover{
background: linear-gradient(rgb(0, 0, 0) 1%,rgba(0,0,0,.8) 15%,rgba(0,0,0,.7) 30%,rgba(0,0,0,.6) 45%,rgba(0, 0, 0, 0.89) 60%,rgba(0, 0, 0, 0.493) 75%,transparent);
/* background: black; */
}
}
.support__header_info_in_box{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 80%;
/* border: 1px solid red; */
}

.support__header_info_address{
color: #6cf;
}
.header__main_search_input{
position:absolute;
left:50%;
transform:translateX(-50%);
top:20px;
width:450px;
border: none;
height: 35px;
font-size: 11px;
outline: 0;
border-radius: 40px;
box-sizing: content-box;
box-shadow: none;
background: 0 0;
color: #fff;
text-align: center;
letter-spacing: .5px;
transition: background .2s ease-in-out,font-size .2s ease-in-out .1s;
background: hsla(0,0%,100%,.5);
padding-top: 2px;
&:hover{
  background: hsla(0,0%,100%,.3);
}
&::placeholder {
color: #fff;
}
&.on{
  background: hsla(0,0%,100%,.3);
  font-size: 13px;
}
}
`;

export default Header;