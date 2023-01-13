import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/Seo';

export default function Blog({ data }: PageProps<Queries.BlogPostsQuery>){
    return (
        <Layout title="Hello welcome to my blog">
            <section className="grid">
                {data.allMdx.nodes.map((file, idx) => (
                    <article key={idx}>
                        <Link to={`/blog/${file.frontmatter?.slug}`}>
                            <h3>{file.frontmatter?.title}</h3>
                            <h5>{file.frontmatter?.author} in : {file.frontmatter?.category}</h5>
                            <h6>{file.frontmatter?.date}</h6>
                        <p>{file.excerpt}</p>
                        </Link>
                    </article>
                ))}
            </section>
        </Layout>
    );
}

export const query = graphql`
    query BlogPosts {
        allMdx {
        nodes {
            frontmatter {
                title
                category
                date(formatString: "YYYY.MM.DD")
                author
                slug
            }
            excerpt(pruneLength: 50)
        }
        }
    }
`;

export const Head = () => <Seo title="Blog"></Seo>;