import "../styles/listadoPost.css";
import React, { useState, useEffect } from 'react';
import usePost from '../hooks/usePost';
import PostPriview from './postPreview';
import useFiltro from '../hooks/useFiltro';

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
        <h1 className='titulo'>Blog</h1>
        {FiltroUI() }
            <div className='contenedor'>
                { postFiltrados.map (post =>(
                    <PostPriview
                        key={post.titulo}
                        post={post}
                    />
                ))}
            </div>
        </>
     );
}
 
export default ListadoPost;
