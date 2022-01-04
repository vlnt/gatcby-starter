import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A little capuchino colored kitty is posing on a table."
        src="../images/kitty.jpg"
      />
    </Layout>
  )
}

export default IndexPage
