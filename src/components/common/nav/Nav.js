import React from 'react'
import { Link } from "react-router-dom";

function nav() {
  return (
    <div>
      <ul>
        <Link to = '/'><li>Landing</li></Link>
        <Link to = '/posts'><li>Post</li></Link>

        {/* 로그인시에만 보여주기 */}
        <Link to = '/mypage'><li>MyPage</li></Link>
        <li>로그인 || 로그아웃 모달</li>
      </ul>
    </div>
  )
}

export default nav
