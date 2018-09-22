import React from 'react'
import { Element, scroller } from 'react-scroll'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Header from '../components/header'
import Footer from '../components/footer'

class BlogPostTemplate extends React.Component {
  scrollToMainContent() {
    scroller.scrollTo('main-content', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  render() {
    const post = this.props.data.markdownRemark

    const meta = []
    if (post.frontmatter.title) {
      meta.push({ property: 'og:title', content: post.frontmatter.title })
      meta.push({ name: 'twitter:title', content: post.frontmatter.title })
    }
    if (post.frontmatter.description) {
      meta.push({ name: 'description', content: post.frontmatter.description })
      meta.push({ name: 'twitter:description', content: post.frontmatter.description })
      meta.push({ property: 'og:description', content: post.frontmatter.description })
    }
    if (post.frontmatter.shareImage) {
      const imageURL = this.props.data.site.siteMetadata.siteUrl + post.frontmatter.shareImage.childImageSharp.resize.src;
      meta.push({ name: 'twitter:image', content: imageURL })
      meta.push({ property: 'og:image', content: imageURL })
      meta.push({ property: 'og:image:width', content: post.frontmatter.shareImage.childImageSharp.resize.width })
      meta.push({ property: 'og:image:height', content: post.frontmatter.shareImage.childImageSharp.resize.height })
    }

    return (
      <Layout location={this.props.location}>
        <Helmet title={post.frontmatter.title} meta={meta} />
        <Header
          title={post.frontmatter.title}
          subtitle={post.frontmatter.subtitle}
          readMoreOnClick={() => this.scrollToMainContent()}
        />

        <Element name="main-content">
          <section ref={this.mainContentRef} className="chapter">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
          </section>
        </Element>

        <Footer />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        subtitle
        description
        shareImage {
          childImageSharp {
            resize(width: 800) {
              width
              height
              src
            }
          }
        }
      }
    }
  }
`
