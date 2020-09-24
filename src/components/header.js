import styled from 'styled-components';
import React from 'react';
import { Link } from "gatsby";

const Titulo = styled.h1`
    font-size: 25px;
    font-weight: 700;
    margin: 0;
    padding: 0;
`;
const Uno = styled.b`
    font-size: 25px;
    font-weight: 700;
    color: #ed6663;
`;
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
    list-style: none !important;
    display: flex !important;
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

return (
        <Cabecera>
            <Link to="/."><Titulo>Lenguaje<Uno>binario</Uno></Titulo></Link>
            <Menu>
            <Lista><Link to="/.">Inicio</Link></Lista>
            <Lista><Link to="/blog/">Blog</Link></Lista>
            </Menu>
        </Cabecera>
    )
}

export default Header;