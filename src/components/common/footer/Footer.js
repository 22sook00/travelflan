import React from 'react';
import { Link } from "react-router-dom";
import {FooterContainer} from './styledFooter';

function Footer() {
  return (
    <FooterContainer>
      <Link to = '/'>
      <p>TravelFlan</p>
      </Link>
      <p> | </p>
      <p>All rights by Lee.sookyoung</p>
    </FooterContainer>
  )
}

export default Footer
