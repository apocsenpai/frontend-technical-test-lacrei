import styled from "styled-components";
import { NavBar as HeaderNavBar } from "../Header/styled";

export const Container = styled.footer`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 2rem;
  border-top: 1px solid #b0e0d3;

  span {
    color: #515151;
    font-size: 0.75rem;
  }
`;

export const NavBar = styled(HeaderNavBar)`
  & > a {
    font-weight: 400;
    color: #1f1f1f;
  }

  & > a.active {
    font-weight: 700;
    color: #1f1f1f;
  }
`;
