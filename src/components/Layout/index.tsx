import * as React from "react";
import { Container } from "./styled";
import { ResetCss } from "../../assets/ResetCss";
import Header from "../Header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <Container>
      <ResetCss />
      <Header />
      {children}
    </Container>
  );
}
