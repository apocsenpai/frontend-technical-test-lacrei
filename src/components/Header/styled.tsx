import styled from "styled-components";

export const Container = styled.header`
  padding: 0.5rem 4rem;
  background-color: #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    transition: all ease 200ms;
  }
  a:hover {
    opacity: 0.7;
  }

  & > a {
    font-size: 2rem;
    font-weight: 700;
    color: #018762;
    line-height: 2.75rem;
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
`;
