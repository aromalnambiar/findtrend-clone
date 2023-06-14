import React from 'react'
import Header from './Header';
import Mid from './Mid';
import Bottom from './Bottom';
import styled from 'styled-components'

// assets

import BgImg from '../../assets/img/Home/bg.jpg'


function Home() {
  return (
    <Container>

      <Header />
      <Mid/>
      <Bottom/>
      
    </Container>
  )
}

export default Home

const Container = styled.div`

background-image: url(${BgImg});
height: 100vh;
background-color: #000;


`;

