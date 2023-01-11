import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers 👏">
      <StaticImage 
        src="https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
        alt="Stickers on the Notebook computer"
        height={500}></StaticImage>
    </Layout>
  )
}

export const Head = () => <Seo title="Home"></Seo>;