import React from 'react';
import { Link } from "gatsby";
import Image from "gatsby-image";
import styled from 'styled-components';

const PostPriview = ({post}) => {
    const { url, titulo, fecha, imagen } = post;

    return (
        <>
        <Contenedor>
            <Link to={url} ><Card>
                <Img fluid={imagen.sharp.fluid} />
                <Titulo>{titulo}</Titulo>
                <Fecha>{fecha}</Fecha>
            </Card></Link>
        </Contenedor>
        </>
    );
}
 
export default PostPriview;

const Contenedor = styled.div`
    width: 40%;
    text-align: center;

    @media (max-width: 740px) {
        margin: 0 auto;
        width: 80%;
    }
`;
const Card = styled.div`
    border: 3px solid #1e2022;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 8px 8px #4e89ae;
    margin-bottom: 40px;
    opacity:1;
    
    :hover{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        box-shadow: 0px 0px #4e89ae;
    }
`;
const Img = styled(Image)`
    border-radius: 10px 10px 0px 0px;
`;
const Titulo = styled.h1`
    color: #1e2022;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 0px;
`;
const Fecha = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: #43658b;
   ; margin-top: 5px;
`
