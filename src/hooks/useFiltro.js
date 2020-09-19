import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const useFiltro = () => {

    const [ categoria, guardarCategoria ] = useState('');

    const resultado = useStaticQuery(graphql`
    query {
        allStrapiCategorias{
          nodes{
            nombre
            id
          }
        }
      }
`);
    
const categorias = resultado.allStrapiCategorias.nodes;

    const FiltroUI = () => (
        <Form>
            <Select onChange={ e => guardarCategoria(e.target.value)} value={categoria} >
                <option value="">Todas las categorias</option>
                {categorias.map(opcion => (
                    <option key={opcion.id} value={opcion.nombre}>{opcion.nombre}</option>
                ))}
            </Select>
        </Form>
    )

    return{
        categoria,
        FiltroUI
    }
}
 
export default useFiltro;

const Form = styled.form`
    text-align: center;
    margin-bottom: 40px;
`

const Select = styled.select`
    color: #2B282A;
    font-weight: 700;
`