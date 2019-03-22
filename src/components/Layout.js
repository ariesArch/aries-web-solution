import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './all.sass'
import '../styles/global.css'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/logo.jpeg" />
        </Helmet>
        <Navbar />
        <div style={{
          fontFamily:'Pyidaungsu',
        }}>{children}</div>
        <Footer />
      </div>
    )}
  />
)

export default TemplateWrapper
