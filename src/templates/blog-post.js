import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Tags from '../components/tags'

import '../styles/global.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          keywords={['javascript', ...post.frontmatter.tags]}
        />
        <h1>{post.frontmatter.title}</h1>
        <span
          style={{
            float: `left`,
            marginBottom: `0.5rem`,
            marginLeft: `2px`,
          }}
        >
          {post.frontmatter.date}
        </span>
        <Tags tags={post.frontmatter.tags} />
        <MDXRenderer>{post.body}</MDXRenderer>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
      body
    }
  }
`
