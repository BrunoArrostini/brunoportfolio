import React from 'react'
import foto from "../images/foto-profil.jpg"
import ContactsIcon from '@mui/icons-material/Contacts';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseIcon from '@mui/icons-material/Close';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const About = () => {
  
  const [info, setInfo] = React.useState(false);

  const getTrue = () => {
    !info ? setInfo(true) : setInfo(false);
  }



  return (
    <div className='middle'>
      <h2>About me</h2>
      <img src={foto} alt="" className='foto'></img>
      <div className='aboutText'>
        <p>Hi I'm Bruno, a <strong>frontend developer</strong> 
        <br/>
        I do love developing beacuse it lets me travel into a different dimension. 
        <br/>
        <br/>
        I graduated in foreign languages, worked as a guide in Northern Europe, then came back to Italy in 2020.
        <br/>Living abroad for a while gave me a different perspective of life. 
        <br/>
        <br/>
        I started a Master in frontend development in 2022. 
        It's been love at first sight beacuse <strong>creating entertaining user interfaces</strong> remindes me when I used to play in my childhood.
        <br/>My best development skill is <strong>React</strong> and its libraries because it allows me to create light apps with lots of features.
        <br/>
        <br/>
        Usually I spend a lot of time in personal growth, actually I'm a very curios person so it's more a need than a choice.
        <br/>
        Anyway I enjoy free time travelling, meeting new people, know more about their story.
        </p>
      </div>
      <div className='contacts'>
        <button onClick={getTrue}><ContactsIcon></ContactsIcon>Contacts</button>
        <button><a href='https://github.com/BrunoArrostini'><GitHubIcon></GitHubIcon></a>GitHub</button>
        <button><a href='https://www.linkedin.com/in/bruno-arrostini-47296a159/'><LinkedInIcon></LinkedInIcon></a>LinkedIn</button>
      </div>
      {info ? <div className='personal'>
        <h3><b>Work with me</b></h3>
        <p><MailIcon style={{color:"#0abab5"}}></MailIcon> brunoarrostini@gmail.com </p>
        <p><LocationOnIcon style={{color:"#0abab5"}}></LocationOnIcon> Parma, Italy</p>
        <button onClick={getTrue}><CloseIcon></CloseIcon>Close</button>
      </div> : ""}
    </div>
  )
}

export default About