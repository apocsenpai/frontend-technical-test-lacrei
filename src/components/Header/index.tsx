import * as React from "react";
import { Container, NavBar } from "./styled";
import { Link } from "gatsby";
import { globalHistory } from "@reach/router";

export default function Header() {
  const path = globalHistory.location.pathname;

  return (
    <Container>
      <Link to="/">Lacrei</Link>
      <NavBar>
        <Link className={`${path === "/" && "active"}`} to="/">
          Home
        </Link>
        <Link
          className={`${path === "/pessoa-usuaria/" && "active"}`}
          to="/pessoa-usuaria"
        >
          Pessoa Usuária
        </Link>
        <Link
          className={`${path === "/profissional/" && "active"}`}
          to="/profissional"
        >
          Profissional
        </Link>
      </NavBar>
    </Container>
  );
}
