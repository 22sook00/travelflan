import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {NavContainer,NavWrapper,
  NavUl,NavLi} from './styledNav';
import LoginModal from '../modal/LoginModal';

function Nav() {

  const [openModal , setOpenModal] = useState(false);

  const loginModalHandler = () => {
    setOpenModal((prev)=>!prev);
  }

  return (
    <NavContainer>
      <NavWrapper>
      <Link to = '/'>
        <NavLi className = 'title'>TravelFlan</NavLi>
      </Link>
      <NavUl>
        <Link to = '/posts'>
          <NavLi>Post</NavLi>
        </Link>

        {/* 로그인상태가 아니라면? */}
        <NavLi onClick = {loginModalHandler}>로그인</NavLi>

        {/* 로그인상태라면? */}
        <Link to = '/mypage'><NavLi>MyPage</NavLi></Link>
        <NavLi>로그아웃</NavLi>
      </NavUl>
      </NavWrapper>

      {openModal ? 
      <LoginModal
      openModal = {openModal}
      setOpenModal = {setOpenModal}
      />
      :
      <></>
      }
    </NavContainer>
  )
}

export default Nav
