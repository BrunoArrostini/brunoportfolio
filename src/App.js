import './App.css';
import React from 'react';
import profile from "./images/Designer.gif"
import Menu from './components/menu/Menu';
import Intro from './components/intro/Intro';
import Pages from './pages/Pages';
import Skills from './components/skills/Skills';

function App() {

  const [show, setShow] = React.useState(true);

  React.useEffect(()=>{
    setTimeout(()=>{
        setShow(false);
    },2500);
  }, []);

  const [showP, setShowP] = React.useState(false);

  React.useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setShowP(true);
    }, 7500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <>
    {show ? <Intro/> :
    <div className='main'>
      <div className='header'>
        <div className='head'>
          {showP ?
          <img src={profile} alt='profile' className='prof-pic'></img>
          : <h2>Frontend developer</h2>
          }
        </div>
      </div>
      <Pages/>
      <Skills/>   
      <Menu/>
    </div> 
    }
    </>
    
  );
}

export default App;
