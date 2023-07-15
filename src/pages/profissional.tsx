import * as React from "react";
import type { HeadFC } from "gatsby";

import Layout from "../components/Layout";
import {
  ContentDescriptionWithBorder,
  ContentTitle,
  ContentWrapper,
  Image,
} from "../components/Layout/styled";
import professionalImg from "../images/professional_img.svg";

export default function Profissional() {
  return (
    <Layout>
      <ContentWrapper>
        <ContentTitle>Profissional</ContentTitle>
        <ContentDescriptionWithBorder>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </ContentDescriptionWithBorder>
      </ContentWrapper>
      <ContentWrapper>
        <Image src={professionalImg} alt="Profissional" />
      </ContentWrapper>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Profissional | Desafio Lacrei</title>;
