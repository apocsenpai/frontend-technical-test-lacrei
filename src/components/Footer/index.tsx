import * as React from "react";
import { Link } from "gatsby";
import { globalHistory } from "@reach/router";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";

import { Container, NavBar } from "./styled";
import Icon from "./Icon";

export default function Footer() {
  const path = globalHistory.location.pathname;

  return (
    <Container>
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
      <NavBar>
        <Icon
          icon={CiFacebook}
          destination="https://www.facebook.com/lacrei.saude"
        />
        <Icon
          icon={CiInstagram}
          destination="https://www.instagram.com/lacrei.saude/"
        />
        <Icon
          icon={CiLinkedin}
          destination="https://www.linkedin.com/company/lacrei/"
        />
      </NavBar>
      <span>Desafio Front-end Lacrei</span>
    </Container>
  );
}
