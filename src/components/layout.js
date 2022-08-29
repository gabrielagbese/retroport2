/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import samp from "./gif.gif"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    
    <div>
      <div id="monitor">
          <div id="bezel">
              <div id="crt" > 
                  <div class="scanline"></div>
                  <div class="terminal" style={{fontSize: '30px', color: '#ede0e0'}}>
                    <h1>The Quick Brown Fox Jumps Over The Lazy Dog in abakaliki next year</h1>

                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
