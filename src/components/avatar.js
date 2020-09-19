import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import styled from 'styled-components';
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
        <Autor>
            <div>
                <Img fluid={data.avatar.childImageSharp.fluid} alt="Personaje" />
            </div>
            <Descripcion>
                <p>Hola soy Christian desarrollador web con residencia en El Salvador, gracias por visitar mi web, puedes cotactarme en mis redes sociales.
                </p>
            <Iconos>
                <Twitter href="https://twitter.com/christianEdSV" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Twitter>
                <Git href="https://github.com/christianEdsv" target="_blank"><FontAwesomeIcon icon={faGithub} /></Git>
                <Linkedin href="https://www.linkedin.com/in/christian-hernandez-531bb494/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Linkedin>
            </Iconos>
            </Descripcion>
        </Autor>
        </>
    );
}
 
export default Avatar;

const Autor = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    color: #1e2022;
    padding: 20px; 
    border: 3px solid #1e2022;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 9px 9px #4e89ae;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 780px) {
        flex-direction: column;
    }

`;
const Img = styled(Image)`
    width: 100px;
`;
const Descripcion = styled.div`
    margin-left: 30px;
    text-align: left;
    @media (max-width: 780px) {
        margin-left: 0;
    }
`;
const Iconos = styled.div`
    display: flex;
    font-size: 25px;

    @media (max-width: 780px) {
        justify-content: space-around;
    }
`;
const Twitter = styled.a`
    color: rgba(29,161,242,1.00);
    :hover{
        color: #ed6663;
    }
`;
const Git = styled.a`
    color: #1e2022;
    margin-left: 50px;
    :hover{
        color: #ed6663;
    }
`
const Linkedin = styled.a`
    color: #0077b5;
    margin-left: 50px;
    :hover{
        color: #ed6663;
    }
`;