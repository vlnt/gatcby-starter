import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <p>So far, you’ve been writing text and adding images directly in your React components.
           That’s an excellent way to build many websites! 
          But often it’s easier to create and maintain data somewhere else - 
          like a folder of Markdown files or a content management system (CMS)
           - and then pull it into your components as needed. 
          That way, you can make updates to your 
          content without affecting the code for your site.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage