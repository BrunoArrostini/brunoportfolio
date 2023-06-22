import React from 'react'
import {Container, Wrapper, Wrapper2} from "./skills.styled"
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import Progress from '../progress/Progress';

const Skills = () => {

  const [showS, setShowS] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setShowS("Html");
    }, 100);
    setTimeout(() => {
      setShowS("Css");
    }, 9100);
    setTimeout(() => {
      setShowS("Js");
    }, 18100);
    setTimeout(() => {
      setShowS("React");
    }, 27100);
    setTimeout(() => {
      setShowS("Ts");
    }, 36100);
    setTimeout(() => {
      setShowS("Git");
    },45100);
    setTimeout(() => {
      setShowS("Mat/ui");
    }, 63100);
    setTimeout(() => {
      setShowS("Axios");
    }, 72100);
    setTimeout(() => {
      setShowS("Responsive");
    }, 81100);
    setTimeout(() => {
      setShowS("Helmet");
    }, 90100);
    setTimeout(() => {
      setShowS("React");
    }, 99100);
  }, []);

  return (
    <Container>
        <Wrapper>
            <h2>Skills   <DeveloperModeIcon style={{color:"white", fontSize:"40px"}}/></h2>
        </Wrapper>
        <Wrapper2>
            <Progress lang={showS}>
            </Progress>
        </Wrapper2>
    </Container>
  )
}

export default Skills