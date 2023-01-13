import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function IndexPage({data} : PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Welcome to DevStickers 👏">
      <div className="grid">
        {data.allContentfulStickerPack.nodes.map(sticker => 
          <article>
            <GatsbyImage image={getImage(sticker.preview?.gatsbyImageData!)!} alt={sticker.name!} />
            <Link to={`/products/${sticker.id}`}>
              <h2>{sticker.name}</h2>
              <h4>${sticker.price}</h4>
            </Link>
          </article>
        )}
      </div>
    </Layout>
  )
}

export const query  = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 500)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home"></Seo>;