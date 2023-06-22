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

export const Wrapper2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
`
