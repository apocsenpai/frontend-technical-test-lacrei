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

  @media (max-width: 1040px) {
    padding: 0 2rem;
  }
  @media (max-width: 520px) {
    padding: 0 1rem;
  }
`;
export const FlexWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  padding-top: 4rem;
  @media (max-width: 1040px) {
    padding-top: 2rem;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
  @media (max-width: 520px) {
    padding-top: 1rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 34rem;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: auto 540 / 421;
  height: 421px;
`;

export const ContentTitle = styled.h2`
  font-weight: 700;
  font-size: 3rem;
  line-height: 4rem;
  color: #1f1f1f;
  @media (max-width: 1040px) {
    font-size: 2rem;
    line-height: normal;
  }
  @media (max-width: 520px) {
    font-size: 1.5rem;
  }
`;

export const ContentDescription = styled.p`
  font-size: 1.5rem;
  color: #515151;
  line-height: 2rem;
  margin-top: 2rem;
  @media (max-width: 1040px) {
    line-height: 1.5rem;
    margin-top: 1rem;
    font-size: 1rem;
  }

  @media (max-width: 520px) {
    line-height: 1.25rem;
    margin-top: 0.875rem;
    font-size: 0.875rem;
  }
`;

export const ContentDescriptionWithBorder = styled(ContentDescription)`
  border-left: 0.32rem solid #018762;
  padding-left: 1.5rem;

  @media (max-width: 1040px) {
    padding-left: 1rem;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
