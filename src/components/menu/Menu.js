import * as React from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import {Container} from "./menu.styled"
import {useNavigate} from "react-router-dom"

export default function Menu() {

  const navigate = useNavigate();
  const goAbout = () => {
    navigate("/about/")
  }

  const goHome = () => {
    navigate("/")
  }


  return (
    <Container>
      <button onClick={goHome}><HomeIcon className='icons'/></button>
      <button onClick={goAbout}><BadgeIcon className='icons'/></button>
    </Container>
  );
}