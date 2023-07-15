import styled from "styled-components";

export const Container = styled.header`
  padding: 0.5rem 4rem;
  background-color: #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    font-size: 2rem;
    font-weight: 700;
    color: #018762;
    line-height: 2.75rem;
  }

  @media (max-width: 1040px) {
    padding: 0.5rem 2rem;
  }
  @media (max-width: 520px) {
    flex-direction: column;
    padding: 0.5rem 1em;
  }
`;

export const NavBar = styled.nav`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;

  & > a {
    font-weight: 700;
    color: #1f1f1f;
  }

  & > a.active {
    color: #018762;
  }

  @media (max-width: 1040px) {
    gap: 2rem;
  }

  @media (max-width: 520px) {
    gap: 1rem;
    font-size: 0.875rem;
  }
`;
