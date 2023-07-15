import * as React from "react";
import type { HeadFC } from "gatsby";

import Layout from "../components/Layout";
import {
  ContentDescriptionWithBorder,
  ContentTitle,
  ContentWrapper,
  Image,
} from "../components/Layout/styled";
import userImg from "../images/user_img.svg";

export default function PessoaUsuaria() {
  return (
    <Layout>
      <ContentWrapper>
        <ContentTitle>Pessoa Usuária</ContentTitle>
        <ContentDescriptionWithBorder>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </ContentDescriptionWithBorder>
      </ContentWrapper>
      <ContentWrapper>
        <Image src={userImg} alt="User" />
      </ContentWrapper>
    </Layout>
  );
}

export const Head: HeadFC = () => (
  <title>Pessoa Usuária | Desafio Lacrei</title>
);
