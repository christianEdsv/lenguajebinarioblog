import React, { useState, useEffect } from 'react';
import usePost from '../hooks/usePost';
import PostPriview from './postPreview';
import useFiltro from '../hooks/useFiltro';
import styled from 'styled-components';

const ListadoPost = () => {

    const resultado = usePost();
    const [ post ] = useState(resultado);
    const [ postFiltrados, guardarFiltrados ] = useState([]);
    //Filtrando los post por categorias 
    const { categoria, FiltroUI } = useFiltro();


    useEffect(() => {
        if(categoria) {
            const filtro = post.filter( post => post.categoria.nombre === categoria);
            guardarFiltrados(filtro);
        } else {
            guardarFiltrados(post);
        }
    }, [post, categoria])

    return (
        <>
        <Titulo>Blog</Titulo>
        {FiltroUI() }
            <Contenedor>
                { postFiltrados.map (post =>(
                    <PostPriview
                        key={post.titulo}
                        post={post}
                    />
                ))}
            </Contenedor>
        </>
     );
}
 
export default ListadoPost;

const Contenedor = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;

    @media (max-width: 740px) {
        flex-flow: column nowrap;
    }
`;
const Titulo = styled.h1`
    text-align: center;
    color: #1e2022;
    font-size: 40px;

    @media (max-width: 780px) {
        font-size: 25px;
    }
`;