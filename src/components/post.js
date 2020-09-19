import React from 'react';
import Image from "gatsby-image";
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout";
import { graphql } from 'gatsby';
import styled from 'styled-components';

export const query = graphql`
query($id: String!) {
	allStrapiPost(filter: { id: {eq: $id} }){
    nodes{
      titulo
      created_by {
        firstname
      }
      fecha
      contenido
        imagen{
          sharp: childImageSharp {
              fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
              }
          }
        }
    }
  }
}
`

const Post = ({data:{ allStrapiPost: { nodes }}}) => {

    const { titulo, created_by, fecha, contenido, imagen} = nodes[0]

    return (
    <>
    <Layout>
    <Contenedor>
        <Imagen fluid={imagen.sharp.fluid} />
        <Titulo>{titulo}</Titulo>
        <Autor>Por: <Enlace href="https://twitter.com/christianEdSV" target="_blank">{created_by.firstname}</Enlace></Autor>
        <Fecha>{fecha}</Fecha>
        <Contenido><ReactMarkdown source={contenido} /></Contenido>
    </Contenedor>
    </Layout>
    </>
    )
}

export default Post;

const Contenedor = styled.div`
  margin: 0 auto;
  width: 70%;

  @media (max-width: 780px) {
    width: 100%;
    text-align :center;
  }
`;
const Imagen = styled(Image)`
  margin-top: 40px;
`;
const Titulo = styled.h1`
  text-align: center;
  color: #1e2022;
  font-size: 40px;
  margin-bottom: 5px;

  @media (max-width: 780px) {
        font-size: 25px;
  }
`;
const Autor = styled.p`
  margin: 0;
  text-align: center;
  color: #1e2022;
  font-size: 18px;

  @media (max-width: 780px) {
        font-size: 15px;
  }
`;
const Enlace = styled.a`
  color: #43658b;
  font-weight: 700;
  :hover{
    color: #ed6663;
    text-decoration: underline;
    text-decoration-color: #ed6663;
  }
`;
const Fecha = styled.p`
  font-size: 13px;
  margin: 0;
  text-align: center;
`;
const Contenido = styled.div`
  width: 100%;
  color: #1e2022;
  font-size: 18px;

  @media (max-width: 780px) {
    text-align: center;
    font-size: 15px;
  }
`;