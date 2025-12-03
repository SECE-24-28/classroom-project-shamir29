import styled from "styled-components";

export const SymbolStyle = styled.div`
  .about-container {
    width: 100%;
    text-align: center;
    padding: 60px 20px;
    background-color: #f8f9fa;
  }

  .about-title {
        font-size: 48px;
        font-weight: 600;
        margin-bottom: 30px;
        color: #000;
        font-family: 'Work Sans', sans-serif;
  }

  .about-text {
    max-width: 900px;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.8;
    font-family: "Work Sans", sans-serif;
    color: rgb(86, 102, 131);
  }
  .boxes-container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin: 60px 0;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    gap: 40px;
    position: relative;
  }

  .boxes-container::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #ddd;
    transform: translateX(-50%);
  }

  .vision-section {
    flex: 1;
    display: flex;
  }

  .mission-section {
    flex: 1;
    display: flex;
  }

  .section-content {
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
  }

  .about-subtitle {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 30px;
    color: rgb(243, 176, 79);
    font-family: 'Work Sans', sans-serif;
    text-align: center;
  }

  .about-description {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.8;
    font-family: "Work Sans", sans-serif;
    color: rgb(86, 102, 131);
    text-align: center;
  }

  .about-mission {
    font-size: 31px;
    font-weight: 600;
    margin-bottom: 30px;
    color: rgb(0, 189, 235);
    font-family: "Work Sans", sans-serif;
    text-align: center;
  }

  .about-mission-text {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.8;
    font-family: "Work Sans", sans-serif;
    color: rgb(86, 102, 131);
    text-align: center;
  }


`;