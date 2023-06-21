import React from 'react'
import Cards from '../components/cards/Cards';
import rafs from "../images/rafs.gif"
import si from "../images/healthy-veg.gif"
import world from "../images/world.gif"
import portfolio from "../images/portfolio.gif"

const Main = () => {

    const [showProj, setShowProj] = React.useState(true);

    React.useEffect(()=>{
      setTimeout(()=>{
          setShowProj(false);
      },500);
    }, []);
  
    const [showSec, setShowSec] = React.useState(true);
  
    React.useEffect(()=>{
      setTimeout(()=>{
          setShowSec(false);
      },1000);
    }, []);
  
    const [show3, setShow3] = React.useState(true);
  
    React.useEffect(()=>{
      setTimeout(()=>{
          setShow3(false);
      },1500);
    }, []);
  
    const [show5, setShow5] = React.useState(true);
  
    React.useEffect(()=>{
      setTimeout(()=>{
          setShow5(false);
      },2000);
    }, []);

  return (
    <div className='middle'>
        <h2>Portfolio <img src={portfolio} alt="" className='portfolio'></img></h2>
        {showProj ? <div></div> :
        <>
        <Cards title={"Fly green"} descripton={"Filght emmissions calculator"} src={rafs} name={"Fly green"} vdsrc={"../public/video/video1.MP4"} 
        path={"https://flygreen.netlify.app"}/>
        </>
        }
        {showSec ? <div></div> : <>
        <Cards title={"Feel Veg"} descripton={"Best vegetarian recipes"} name={"Feel veg"} src={si} path={"https://feel-vegan.netlify.app"} />
        </>
        }
        {show3 ? <div></div> : <>
        <Cards title={"City advisor"} descripton={"Useful info about cities"} name={"City advisor"} src={world} path={"https://cityadvisor.netlify.app"}/>
        </>
        }
        {show5 ? <div></div> : <>
        </>
        }
    </div>
  )
}

export default Main