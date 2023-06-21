import styled from "styled-components"

export const Container = styled.div`
width: 100%;
position: sticky;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
height: 70px;
background-color: white;

button{
    border:none;
    background-color: white;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;

    &:active{
        color:blue;
    }
}
`;
