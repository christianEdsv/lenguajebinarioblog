import Layout from "../components/layout";
import ContenidoIndex from "../components/contenidoIndex";
import React from "react";
import SEO from "../components/seo";

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Inicio" />
      <ContenidoIndex />
    </Layout>
  );
}

export default IndexPage;