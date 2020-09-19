exports.createPages = async ({actions, graphql, reporter}) => {
    const resultado = await graphql(`
        query{
            allStrapiPost{
                nodes{
                    id
                    url
                }
            }
        }
    `);

    if (resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors);
    }

    const post = resultado.data.allStrapiPost.nodes;

    post.forEach(element => {
        actions.createPage({
            path: `/blog/${element.url}/`,
            component: require.resolve('./src/components/post.js'),
            context: {
                id: element.id
            }
        })
    });
}