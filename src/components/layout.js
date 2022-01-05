import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container,
         heading,
         navLinks,
         navLinkItem,
         navLinkText, 
         siteTitle} from './layout.module.css'


         const Layout = ({ pageTitle, children }) => {
          const data = useStaticQuery(graphql`
          query {
            site {
              siteMetadata {
                title
              }
              buildTime(fromNow: false)
            }
          }
        `)
            return (
              <div className={container}>
                <title> {data.site.siteMetadata.title} | {pageTitle}</title>
                <header className={siteTitle}>
                  <h3> {data.site.siteMetadata.title} </h3>
                </header>
                <nav>
                  <ul className={navLinks}>
                    <li className={navLinkItem}>
                      <Link to="/" className={navLinkText}>
                        Home
                      </Link>
                    </li>
                    <li className={navLinkItem}>
                      <Link to="/about" className={navLinkText}>
                        About
                      </Link>
                    </li>
                    <li className={navLinkItem}>
                       <Link to="/blog" className={navLinkText}>
                          Blog
                       </Link>
                    </li>
                  </ul>
                </nav>
                <main>
                  <h1 className={heading}>{pageTitle}</h1>
                  {children}
                </main>
                <footer>
                  <p>Last build at:</p>
                  <p>{data.site.buildTime}</p>
                </footer>
              </div>
            )
          }

export default Layout