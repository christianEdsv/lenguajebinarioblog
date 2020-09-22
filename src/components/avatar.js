import "../styles/avatar.css";
import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Avatar = () => {

const data = useStaticQuery(graphql`
    query {
    avatar: file(relativePath: {eq: "avatar.png"}){
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
        <div className='autor'>
            <div>
                <Image className='img' fluid={data.avatar.childImageSharp.fluid} alt="Personaje" />
            </div>
            <div className='descripcion'>
                <p>Hola soy Christian desarrollador web con residencia en El Salvador, gracias por visitar mi web, puedes cotactarme en mis redes sociales.
                </p>
            <div className='iconos'>
                <a className='twitter' href="https://twitter.com/christianEdSV" target="_blank" rel="noopener"><FontAwesomeIcon icon={faTwitter} /></a>
                <a className='git' href="https://github.com/christianEdsv" target="_blank" rel="noopener"><FontAwesomeIcon icon={faGithub} /></a>
                <a className='linkedin' href="https://www.linkedin.com/in/christian-hernandez-531bb494/" target="_blank" rel="noopener"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            </div>
        </div>
        </>
    );
}
 
export default Avatar;