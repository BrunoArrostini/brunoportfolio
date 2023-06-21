import React from 'react'
import {Container, Wrapper, Space, Card, Wrapper2} from "./skills.styled"
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import cannon from "../../images/cannon.gif"

const Skills = () => {

  const [showS, setShowS] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setShowS("Html");
    }, 100);
    setTimeout(() => {
      setShowS("Css");
    }, 3100);
    setTimeout(() => {
      setShowS("Js");
    }, 6100);
    setTimeout(() => {
      setShowS("React");
    }, 9100);
    setTimeout(() => {
      setShowS("Ts");
    }, 12100);
    setTimeout(() => {
      setShowS("Git");
    },15100);
    setTimeout(() => {
      setShowS("Mat/ui");
    }, 18100);
    setTimeout(() => {
      setShowS("Axios");
    }, 21100);
    setTimeout(() => {
      setShowS("Responsive");
    }, 24100);
    setTimeout(() => {
      setShowS("Helmet");
    }, 27100);
    setTimeout(() => {
      setShowS("React");
    }, 30100);
  }, []);

  return (
    <Container>
        <Wrapper>
            <h2>Skills   <DeveloperModeIcon style={{color:"white", fontSize:"40px"}}/></h2>
        </Wrapper>
        <Wrapper2>
            <img src={cannon} alt=""></img>
            <Card>
              {showS}
            </Card>
            <Space></Space>
        </Wrapper2>
    </Container>
  )
}

export default Skills