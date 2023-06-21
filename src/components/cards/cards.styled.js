import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
width: 350px;
height: 200px;
padding: 10px;
margin-right: 15px;
box-shadow: 4px 8px 14px gray;
margin-bottom: 20px;
animation: animato 5s linear infinite;
position: relative;

@keyframes animato {
  0%, 100% {
    bottom: 0;
  }
  50% {
  bottom:20px;
  }
  }
`;

export const Wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
padding: 10px;

h3{
    font-size: 25px;
    padding: 2px;
    margin-bottom: 7px;
    text-shadow: 0px 2px 2px gray;
}

p{
    font-size: 12px;
    margin-bottom: 5px;
}

button{
    padding: 4px;
    background-color: white;
    border-radius: 5px;
    color: black;
    text-shadow: 2px 5px 8px gray;
    font-size: 10px;
    font-weight: 600;
    box-shadow: 2px 5px 8px gray;
    cursor: pointer;
}

button:hover{
    background-color: #19aca7;
}

img{
    width: 100px;
    height: 80px;
}
`;