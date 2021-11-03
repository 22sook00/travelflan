import styled from 'styled-components'
import { TextColor } from '../../../GlobalStyle'

export const NavContainer = styled.header`
width : 100%;
height : 100px;
background: #fff;
box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;

`
export const NavWrapper = styled.nav`
height: 100%;
padding : 0 30px;
display: flex;
justify-content: space-between;
align-items: center;
`
export const NavUl = styled.ul`
list-style: none;
`
export const NavLi = styled.li`
display: inline-block;
margin : 5px;
color : ${TextColor};
cursor: pointer;
&.title{
  font-size : 22px;
}
&:hover{
  opacity : 0.7;
}
`
