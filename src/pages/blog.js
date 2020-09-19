import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import ListadoPost from "../components/listadoPost";

const Blog = () => {
    return (
        <Layout>
        <SEO title="Blog" />
        <ListadoPost />
        </Layout>
    );
}
 
export default Blog;