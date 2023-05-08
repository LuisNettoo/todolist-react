import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    min-height: 100vh;
    padding: 2rem;
  }

  h1 {
    color: #252525;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
     
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;

    outline: none;
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.25rem;
  }

`;
