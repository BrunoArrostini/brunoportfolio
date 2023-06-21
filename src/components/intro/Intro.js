import React from 'react'
import {Container} from "./intro.styled"
import dev from "../../images/developer.gif" 


const Intro = () => {

  return ( 
    <Container>
        <h1>Portfolio</h1>
        <p>Hi, I'm Bruno <br/> Frontend developer</p>
        <img src={dev} alt="dev"></img>
    </Container>
  )
}

export default Intro