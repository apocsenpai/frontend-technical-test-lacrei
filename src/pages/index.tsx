import * as React from "react";
import { HeadFC, Link } from "gatsby";

import Layout from "../components/Layout";
import {
  ButtonGroup,
  ContentDescription,
  ContentTitle,
  ContentWrapper,
  Image,
} from "../components/Layout/styled";
import homeImg from "../images/home_img.svg";
import Button from "../components/Button";

export default function Home() {
  return (
    <Layout>
      <ContentWrapper>
        <ContentTitle>Boas vindas a Lacrei Saúde</ContentTitle>
        <ContentDescription>
          Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
        </ContentDescription>
        <ButtonGroup>
          <Link to="/pessoa-usuaria">
            <Button fill={true}>Pessoa Usuária</Button>
          </Link>
          <Link to="/profissional">
            <Button fill={false}>Profissional</Button>
          </Link>
        </ButtonGroup>
      </ContentWrapper>
      <ContentWrapper>
        <Image src={homeImg} alt="Home" />
      </ContentWrapper>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Home | Desafio Lacrei</title>;
