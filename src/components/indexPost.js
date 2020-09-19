import React, { useState, useEffect } from 'react';
import UseIndexPost from '../hooks/useIndexPost';
import PostPriview from './postPreview';
import styled from 'styled-components';

const IndexPost = () => {

    const resultado = UseIndexPost();
    const [ post, guardarPosts ] = useState(resultado);

    useEffect(() => {
        guardarPosts(post);
    }, [ post ])

    return (
        <>
            <Contenedor>
                { post.map (post =>(
                    <PostPriview
                        key={post.titulo}
                        post={post}
                    />
                ))}
            </Contenedor>
        </>
    );
}
 
export default IndexPost;

const Contenedor = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
`;
