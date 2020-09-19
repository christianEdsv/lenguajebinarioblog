import { graphql, useStaticQuery } from 'gatsby';

const usePost = () => {
    const post = useStaticQuery(graphql`
    query{
        allStrapiPost(sort: { fields: id, order: DESC}){
          nodes{
            id
            url
            titulo
            fecha
            contenido
            categoria {
              nombre
            }
            imagen{
              sharp: childImageSharp {
                fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `)
    return post.allStrapiPost.nodes.map( post => ({
        url : post.url,
        titulo : post.titulo,
        fecha : post.fecha,
        contenido: post.contenido,
        categoria: post.categoria,
        imagen : post.imagen
    }))
}
 
export default usePost;
