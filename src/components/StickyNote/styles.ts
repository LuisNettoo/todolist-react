import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 300px;
  background: #fdf2b3;
  padding: 1rem;
  box-shadow: 2px 2px 7px 2px #00000040;
  border-radius: 0.25rem;
  flex-wrap: nowrap;

  position: relative;

  h1 {
    font-size: 1.5rem;
    height: 4.5rem;
  }

  p {
    margin-top: 0.25rem;
  }

  button {
    background: 0;
    border: none;
    position: absolute;
    right: 15px;
    cursor: pointer;

    svg {
      font-size: 1.2rem;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;
