import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReadme } from "@fortawesome/free-brands-svg-icons"
import styled from 'styled-components';
import Avatar from './avatar';

const ContenidoIndex = () => {

const data = useStaticQuery(graphql`
    query {
    character: file(relativePath: {eq: "character.png"}){
        childImageSharp{
        fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
        }
        } 
    }
    }
`)

return (
    <>
        <Contenedor>
        <Sitio>
            <Img fluid={data.character.childImageSharp.fluid} alt="Personaje" />
            <Titulo>Lenguaje binario</Titulo>
            <Binario>01000010 01101001 01100101 01101110 01110110 01100101 01101110 01101001 01100100 01101111 00101111 01100001</Binario>
        </Sitio>
        <Contenido>
            <Parrafo>Hola gracias por visitar la web</Parrafo>
            <Parrafo>Lenguaje binario es un blog en español donde hablamos sobre <b>tecnología, programación, videojuegos, literatura y todo lo relacionado con el mundo nerd. </b>
            Dentro de cada categoría podrás encontrar artículos de opinión, análisis, buenas prácticas, historia, vida diaria, entre otros temas.</Parrafo>
            <Parrafo>Todos los articulos son escritos por <Enlace href="https://twitter.com/christianEdSV" target="_blank">Christian Hernandez</Enlace></Parrafo>
        </Contenido>
        <Boton to="/blog/"><Icono icon={faReadme} size="xs"/>Ir a Blog</Boton>
            <Avatar />
        </Contenedor>
    </>
);
}
 
export default ContenidoIndex;

const Contenedor = styled.div`
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 60%;

    @media (max-width: 780px) {
        width: 100%;
    }
`;
const Sitio = styled.div`
    margin-top: 50px;
    text-align: center;
`;
const Img = styled(Image)`
    width: 150px;
    margin: 0 auto;

    @media (max-width: 780px) {
        width: 100px;
    }
`;
const Titulo = styled.h1`
    color: #1e2022;
    font-size: 40px;
    margin: 15px;

    @media (max-width: 780px) {
        font-size: 25px;
    }
`;
const Binario = styled.p`
    margin: 0 auto;
    width: 50%;
    color: #43658b;
    font-size: 15px;
    text-align: center;

    @media (max-width: 780px) {
        font-size: 15px;
    }
`;
const Contenido = styled.div`
    margin-top: 50px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Parrafo = styled.p`
    color: #1e2022;
    margin-top: 5px;
    font-size: 18px;
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
const Boton = styled(Link)`
    font-size: 20px;
    margin: 0 auto;
    padding: 10px;
    border: 2px solid #1e2022;
    border-radius: 3px;
    text-align: center;
    width: 50%;
    font-weight: 700;
    color: #1e2022;
    :hover{
        background-color: #ed6663;
        color: #fff;
    }
`;
const Icono = styled(FontAwesomeIcon)`
    margin-right: 5px;
`;