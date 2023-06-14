import React from 'react'
import styled from 'styled-components'

// assets

import Img from '../../assets/img/Home/findtrend.svg'

function Header() {
  return (
    <Headers>
        <Logo src={Img} alt="img" />

        <Lists>
          <List href="#">About</List>
          <List href="#">How it work</List>
          <List href="#">Pricing</List>
          <List href="#">Solution</List>
          <List href="#">Features</List>
        </Lists>

        <Authentication>
          <Login href="#">Login</Login>
          <Register href="#">Register</Register>
        </Authentication>

      </Headers>
  )
}

export default Header

const Headers = styled.div`

display : flex;
justify-content: space-around;
padding-top: 30px;

`;

const Logo = styled.img`

`;

const Lists = styled.div`

display: flex;
margin-top: 10px;


`;

const List = styled.a`

color: #fff;
font-weight: bold;
margin: 15px;
text-decoration: none;

`;

const Authentication = styled.div`

margin-top: 20px;

`;

const Login = styled.a`

margin: 25px;
font-weight: bold;
color: #fff;
text-decoration: none;

`;

const Register = styled.a`

text-decoration: none;
color: #000;
background-color: #fff;
margin: 15px;
padding: 10px 30px 10px 30px; 
border-radius: 20px;

`;