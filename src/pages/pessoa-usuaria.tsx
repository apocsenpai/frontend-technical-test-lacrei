import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";

export default function PessoaUsuaria() {
  return (
    <Layout>
      <h1>PessoaUsuaria</h1>
      <p>I'm makin this by following the Gatsby Tutorial.</p>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Pessoa Usuária | Desafio Lacrei</title>;
