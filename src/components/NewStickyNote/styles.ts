import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  width: 300px;
  height: 300px;
  background: #ebebeb;
  padding: 1rem;
  box-shadow: 2px 2px 7px 2px #00000040;
  border-radius: 0.25rem;
  transition: all 200ms ease;
  border: none;
  outline: none;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    color: #000;
  }
`;
