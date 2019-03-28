import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="My Writing"
          keywords={[`blog`, `Timothy`, `javascript`, `Timothy Ko`, `Tim`, `Hack4Impact`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <p
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <span style={{
                  color: "#5c5c5c",
                  paddingRight: "15px",
                  textAlign: "right",
                  width: "100px",
                  display: "inline-block",
                  fontSize: "13px"
                }}>{node.frontmatter.date}</span>
                <Link style={{ boxShadow: `none` }} className="blog-link-text" to={node.fields.slug}>
                  {title}
                </Link>
              </p>
              {/* <small>{node.frontmatter.date}</small> */}
              {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
