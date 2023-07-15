import styled from "styled-components";

export const ButtonStyled = styled.button`
  cursor: pointer;
  width: 12rem;
  height: 3rem;
  font-size: 1.125rem;
  font-weight: 700;
  border: 0.125rem solid transparent;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px 0px #00000040;

  &.fill {
    background-color: #018762;
    color: #ffffff;
  }

  &.outline {
    border-color: #018762;
    color: #018762;
  }
`;
