import * as React from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import {Container} from "./menu.styled"
import {useNavigate} from "react-router-dom"

export default function Menu() {

  const navigate = useNavigate();
  const goAbout = () => {
    navigate("/about/")
    window.scrollTo(300,-800)
  }

  const goHome = () => {
    navigate("/");
    window.scrollTo(300,-800)
  }


  return (
    <Container>
      <button onClick={goHome}><HomeIcon className='icons'/>Home</button>
      <button onClick={goAbout}><BadgeIcon className='icons'/>About me</button>
    </Container>
  );
}