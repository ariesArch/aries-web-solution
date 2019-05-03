import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Features from '../components/Features'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

import '../utils/typography.js';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
}) => (
    <div>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp
                ? image.childImageSharp.fluid.src
                : image
            })`,
            backgroundPosition: `bottom left`,
            backgroundAttachment: `fixed`,
          }}
    >
  <div style={{
        display: 'flex',
        height: '150px',
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column' }}>
      <h1
        className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        style={{
          color: 'white',
          lineHeight: '1',
          padding: '0.25em'
        }}
      >
        {heading}
      </h1>
      <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            textAlign:'center',
          }}
      >
        {subheading}
      </h3>
      </div>
    </div>
  <section className="section section--gradient">
    <div className="container">
      <div className="section wrapper">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="content">
                <div className="tile">
                  <h1 className="title">{title}</h1>
                </div>
                <div className="tile">
                  <h6 className="subtitle">{description}</h6>
                </div>
              </div> 
              
              <div className="content">
                <div className="tile">
                  <h1 className="title">{mainpitch.title}</h1>
                </div>
                <div className="tile">
                  <h6 className="subtitle">{mainpitch.description}</h6>
                </div>
              </div>   
              <h2>Current Portfolio</h2>
              <h4>Restaurant Management System for Glad House Coffee & Noodle(Naypyitaw)</h4>
              <Features gridItems={intro.blurbs} /> 
              <div className="column is-12">
              <h2>Products</h2>
                <div className="column is-6">
                  <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dezfood.com.mm%26fbclid%3DIwAR3_tlXzD99jkS-eaQuL_a9-iM7wFDD8NSjVGuzvm22P-HKZv6FLXWMFfSI&h=AT1UawMoWdCC53gsWx6l1DhdlRUxv7KJvnK1smPFHIe6pLtcf7Tq8bfCEY23Fygdx0FvLQKi0Sj4vH5Kcw330Y78thHw3kVrhcAQad4D_kd_Ptn-mzXCTE2gmNXT_w">
                  EZ Food Mobile Application
                  </a>
                </div>
                <div className="column is-3">
                  <a href="https://play.google.com/store/apps/details?id=com.onekyat.app&fbclid=IwAR29MB54AVYUXYsmtPQSYrenMifn0pxoTuQn0u8ZXnQj9PNBsQQD-vRmP1Y">
                  OneKyat - Myanmar Buy & Sell
                  </a>
                </div>
                <div className="column is-3">
                <a href="https://baganmart.com/">
                  Baganmart B2C Platform
                  </a>
                </div>
              </div>
              <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest Blog Posts
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                  <Link className="btn more-stories" to="/blog">
                    More stories
                  </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
