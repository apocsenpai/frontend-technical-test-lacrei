import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  font-family: "Nunito", sans-serif;
  letter-spacing: -0.25px;

  a {
    transition: all ease 200ms;
  }
  a:hover {
    opacity: 0.7;
  }
`;

export const ContainerWrapper = styled.div`
  padding: 0 4rem;
`