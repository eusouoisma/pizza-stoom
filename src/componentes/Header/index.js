import React from 'react';
import Logo from '../../img/logo.png';
import { HeaderStyle } from './styles';

export default function Header() {
 return (
   <HeaderStyle>
       <div className="container">
           <img src={Logo} alt="logo"/>
       </div>
   </HeaderStyle>
 );
}