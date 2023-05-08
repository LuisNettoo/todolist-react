import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  input {
    outline: none;
    padding: 0.5rem;
    font-size: 1rem;
    width: 100%;
  }

  button {
    padding: 1rem;
    font-size: 1rem;
    background-color: #cecece;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      filter: brightness(0.9);
    }

    &:first-child {
      position: absolute;
      background: 0;
      padding: 0;
      max-width: min-content;
      font-weight: bold;

      right: -15px;
      top: -15px;
    }
  }
`;
