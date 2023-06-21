import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
background-color: #19aca7;
margin-top: 35px;
border-top-left-radius: 40px;
border-top-right-radius: 40px;
`;

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

img{
    width: 100px;
    height: 50px;
}

h2{
    margin-top: 20px;
    text-shadow: 0px 2px 2px black;
    display: flex;
   margin-bottom: 30px;
}
`;

export const Space = styled.div`
height:100px;
`;

export const Wrapper2 = styled.div`
 position:relative;
 

  img{
    width: 250px;
    position: absolute;
    right: 0;
    z-index: 3;
  }
`

export const Card = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
  box-shadow: 3px 3px 5px black;


    animation: balls 3s linear infinite;
  

  @keyframes balls {
    0%, 50%{
        position: relative;
        right:90px;
        bottom: -30px;
    }
    100%{
        position: relative;
        right: -300px;
        bottom:-30px;
    }
  }
`