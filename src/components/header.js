import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import styled from 'styled-components';

const Cabecera = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;

    @media (max-width: 780px) {
        flex-direction: column;
    }
`;
const Menu = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
`;
const Lista = styled.li`
    font-family: 'PT Serif', serif;
    font-size: 15px;
    font-weight: 700;
    padding: 10px 20px;
    text-align: center;
    :hover{
        color: #fff;
        text-decoration-color: #fff;
        background-color: #ed6663;
    }
`;

const Header = () => {

const data = useStaticQuery(graphql`
query {
    logo: file(relativePath: {eq: "logo.png"}){
        childImageSharp{
        fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
        }
      } 
    }
  }
`)


return (
        <Cabecera>
            <h1>Lenguaje binario</h1>
            <Menu>
            <Link to="/."><Lista>Inicio</Lista></Link>
            <Link to="/blog/"><Lista>Blog</Lista></Link>
            </Menu>
        </Cabecera>
    )
}

export default Header;