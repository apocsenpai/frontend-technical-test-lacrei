import * as React from "react";
import { Container, ContainerWrapper } from "./styled";
import { ResetCss } from "../../assets/ResetCss";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <Container>
      <ResetCss />
      <Header />
      <ContainerWrapper>
        {children}
        <Footer />
      </ContainerWrapper>
    </Container>
  );
}
