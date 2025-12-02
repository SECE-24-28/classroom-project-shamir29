import styled from "styled-components";
export const HelloWorldStyle = styled.div`
  .parent {
    display: flex;
    background-color: green;
    //align-items: flex-start;
    // align-items: center;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 20px;
    height: 100vh;
  }
  .square__child {
    width: 50px;
    height: 50px;
    background-color: yellow;
  }
`;
