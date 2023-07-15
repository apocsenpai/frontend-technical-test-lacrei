import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";

export default function Profissional() {
  return (
    <Layout>
      <h1>Profissional</h1>
      <p>I'm makin this by following the Gatsby Tutorial.</p>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Profissional | Desafio Lacrei</title>;
