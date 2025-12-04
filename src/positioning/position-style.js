import styled from "styled-components";

export const PostionStyle = styled.div`
  .element {
    width: 150px;
    height: 150px;
    background-color: red;
    margin: 5px;
  }
  
  .element__one {
    width: 150px;
    height: 150px;
    background-color: #172B4D;
    margin: 5px;
  }
  
  .square {
    width: 500px;
    height: 500px;
    background-color: #3366FF;
    position: relative;
  }
  
  .square__element {
    width: 250px;
    height: 250px;
    background-color: #FFBF00;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;