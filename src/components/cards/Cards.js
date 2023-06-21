import React from 'react'
import {Container, Wrapper} from "./cards.styled"

const Cards = ({title, src, descripton, name, path}) => {

  return (
    <Container>
        <Wrapper>
            <h3>{title}</h3>
            <img src={src} alt=""></img>
            <p>{descripton}</p>
            <button><a href={path}>Go to {name}</a></button>
        </Wrapper>
    </Container>
  )
}

export default Cards