import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReadme } from "@fortawesome/free-brands-svg-icons"
import "../styles/contenidoIndex.css";
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
        <div className='contenedor'>
        <div className='sitio'>
            <Image className='img' fluid={data.character.childImageSharp.fluid} alt="Personaje" />
            <h1 className='titulo'>Lenguaje binario</h1>
            <p className='binario'>01000010 01101001 01100101 01101110 01110110 01100101 01101110 01101001 01100100 01101111 00101111 01100001</p>
        </div>
        <div className='contenido'>
            <p className='parrafo'>Hola gracias por visitar la web</p>
            <p className='parrafo'>Lenguaje binario es un blog en español donde hablamos sobre <b>tecnología, programación, videojuegos, literatura y todo lo relacionado con el mundo nerd. </b>
            Dentro de cada categoría podrás encontrar artículos de opinión, análisis, buenas prácticas, historia, vida diaria, entre otros temas.</p>
            <p className='parrafo'>Todos los articulos son escritos por <a className='enlace' href="https://twitter.com/christianEdSV" target="_blank">Christian Hernandez</a></p>
        </div>
        <Link className='boton' to="/blog/"><FontAwesomeIcon className='icono' icon={faReadme} size="xs"/>Ir a Blog</Link>
            <Avatar />
        </div>
    </>
)
}
 
export default ContenidoIndex;